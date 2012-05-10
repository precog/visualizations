/*global $: false, Precog: false, ace : false, require: false */
// TODO: table resize

(function () {
    "use strict";

    window.PrecogIDE = {
        ready : function() {}
    };

    // UTILITIES
    $.browser.safari = ( $.browser.safari && /chrome/.test(navigator.userAgent.toLowerCase()) ) ? false : true;

    var downloadQueryService = "http://api.reportgrid.com/services/viz/proxy/download-code.php",
        doc = document,
        initialFolder = location.href.match(/\//g).length,
        skinRegex = /kendo\.\w+(\.min)?\.css/i,
        loadCssNative = document.createStyleSheet ?
            function (css) { doc.createStyleSheet(css); } :
            function (css) { $("head").append($("<link rel='stylesheet' href='" + css + "' type='text/css' media='screen' />")); },
        loadCss = function (css) {
            if ("string" === typeof css) {
                css = [css];
            }
            for (var i = 0; i < css.length; i++) {
                loadCssNative(css[i]);
            }

        };
    var _getSyncScript = function (url, callback)
    {
        $.ajax({
            url: url,
            dataType: "script",
            async : false,
            cache : true
        }).done(callback);
    };
    var loadSyncScript = function (scripts, callback) {
        if ("string" === typeof scripts) {
            scripts = [scripts];
        }
        var counter = scripts.length;
        for(var i=0;i<scripts.length;i++) {
            _getSyncScript(scripts[i], function(e) {
                counter--;
                if(counter > 0 || !callback) return;
                callback();
            });
        }
    };

    var selectText = function(element) {
        if (document.body.createTextRange) { // ms
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            if (selection.setBaseAndExtent) { // webkit
                selection.setBaseAndExtent(element, 0, element, 1);
            } else { // moz, opera
                var range = document.createRange();
                range.selectNodeContents(element);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    };

    function contextMenu(options) {
        if (!options) { alert('You have not specified any options!'); return; }
        if (!options.trigger) { alert('You must supply a trigger element selector!'); return; }
        if (!options.menu) { alert('You must specify a menu element selector!'); return; }
        if (!options.callback) { options.callback = function(item, trigger) { }; }
        options.rightButton = options.rightButton || true;
        options.zindex = options.zindex || 100;

        var menu = $(options.menu);
        if (!menu.parent().hasClass('k-context-menu')) menu.wrap(document.createElement('div'));
        menu = menu.parent().addClass('k-context-menu').hide();

        var panel = $('#pg-ctx-menupanel');
        if (!panel[0]) panel = $(document.createElement('div')).attr('id', 'pg-ctx-menupanel');

        menu.visible = false;
        menu.addClass('k-calendar-container k-popup k-group k-reset');
        menu.css({ position: 'absolute', 'background-color': 'white', display: 'none', 'z-index': options.zindex + 10000000, padding: 0 });

        menu.close = function () { menu.fadeOut('fast'); panel.hide(); menu.visible = false; };
        menu.show = function () {
            if (menu.visible) {
                menu.close();
            } else {
                var me = $(this),
                    pos = me.offset(); pos.top += me.height(); pos.left += me.width() - menu.width();
                panel.css({ top: 0, left: 0, width: '100%', height: $(document).height(), 'background-color': 'transparent' }).show();
                menu.data('trigger', $(this));
                menu.css(pos).fadeIn('fast');
                menu.visible = true;
            }
            return false;
        };

        panel.css({ position: 'absolute', display: 'none', 'z-index': options.zindex });
        panel.appendTo('body').click(menu.close);

        var list = menu.find('ul').css({ 'list-style-type': 'none', padding: 0, margin: 0 });
        list.find('li').on('click', function (e) {
            menu.close();
            options.callback($(this), menu.data('trigger'));
        }).mouseenter(function () {
            $(this).addClass('k-state-hover');
        }).mouseleave(function () {
            $(this).removeClass('k-state-hover');
        }).css({ margin: 0, cursor: 'pointer', padding: '3px 7px 3px 7px' });

        // bind the triggers
        $(options.trigger).each(function (index) {
            if (options.leftButton) $(this).click(menu.show);
            if (options.rightButton) $(this).bind("contextmenu", menu.show);
        });
    }

    var inited = false;
    function init() {
        if(inited) return;
        inited = true;
        var configIde = (function(){

            var PRECOG_CONFIG_KEY = "pg-ide-config",
                o = {
                    theme : "default",
                    indentUsingSpaces : true,
                    tabWidth : 2,
                    disableClientCache : true,
                    editors : {
                        "query #1" : {
                            code : "",
                            result : null,
                            error : null,
                            output : "table",
                            uid : "query #1"
                        }
                    }
                };

            function splitPath(key) {
                return key.split(/\.|\[|\]\.?/g);
            }

            function traverseGet(key) {
                var path = splitPath(key),
                    ref = o,
                    segment = path.shift();
                while(segment && ref) {
                    ref = ref[segment];
                    segment = path.shift();
                }
                return ref;
            }

            function traverseSet(key, value) {
                var path = splitPath(key),
                    ref = o,
                    segment = path.shift(),
                    next,
                    nextref;
                while(path.length > 0) {
                    next = path.shift();
                    nextref = ref[segment];
                    if("undefined" === typeof nextref) {
                        nextref = ref[segment] = {};
                    }
                    ref = nextref;
                    segment = next;
                }
                ref[segment] = value;
            }

            function traverseRemove(key) {
                var path = splitPath(key),
                    ref = o,
                    segment = path.shift(),
                    next;
                while(path.length > 0) {
                    next = path.shift();
                    ref = ref[segment];
                    if("undefined" === typeof ref)
                    {
                        return;
                    }
                    segment = next;
                }
                delete ref[segment];
            }

            function save() {
                $.jStorage.set(PRECOG_CONFIG_KEY, o)
            }

            function load() {
                o = $.jStorage.get(PRECOG_CONFIG_KEY, o);
            }

            var delayedSave = (function() {
                var kill;
                return function() {
                    if(kill) clearInterval(kill);
                    kill = setTimeout(save, 100);
                }
            })();

            load();

            return {
                get : function(key, alternative) {
                    var v = traverseGet(key);
                    if("undefined" === typeof v)
                        return alternative;
                    else
                        return v;
                },
                set : function(key, value) {
                    traverseSet(key, value);
                    delayedSave();
                },
                remove : function(key) {
                    traverseRemove(key);
                    delayedSave();
                },
                keys : function(key) {
                    var ref = traverseGet(key);
                    if(ref && "object" === typeof ref) {
                        var result = [];
                        for(var k in ref) {
                            if (ref.hasOwnProperty(k)) {
                                result.push(k);
                            }
                        }
                        return result;
                    } else {
                        return [];
                    }
                },
                save : function(instant) {
                    if(instant)
                        save();
                    else
                        delayedSave();
                },
                load : function() {
                    load();
                },
                clear : function() {
                    $.jStorage.flush();
                }
            }
        })();

        window.ConfigIDE = configIde;

        var toggleFullScreen = (function () {
            var isfullscreen,
                requestFullScreen,
                exitFullScreen;
            if(doc.documentElement.requestFullscreen) {
                requestFullScreen = function(el) { el.requestFullscreen(); };
            } else if(doc.documentElement.mozRequestFullScreen) {
                requestFullScreen = function(el) { el.mozRequestFullScreen(); };
            } else if (!$.browser.safari && doc.documentElement.webkitRequestFullScreen) {
                requestFullScreen = function(el) {
                    el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    if (!document.webkitCurrentFullScreenElement) {
                        el.webkitRequestFullScreen();
                    }
                };
            } else {
                setTimeout(function() { $('.pg-precog-ide .pg-fullscreen').hide(); }, 20);
                requestFullScreen = function(_) { console.log("your browser doesn't support the FullScreen option"); };
            }
            if(doc.exitFullscreen) {
                exitFullScreen = function(el) { doc.exitFullscreen(); };
            } else if(doc.mozCancelFullScreen) {
                exitFullScreen = function(el) { doc.mozCancelFullScreen(); };
            } else if (!$.browser.safari && doc.webkitCancelFullScreen) {
                exitFullScreen = function(el) {
                    el.webkitRequestFullScreen(); // chrome doesn't behave correctly when the app is started fullscreen
                    doc.webkitCancelFullScreen();
                };
            } else {
                exitFullScreen = function(_) { console.log("your browser doesn't support the FullScreen option"); };
            }
            function toggle() {
                isfullscreen = (!window.screenTop && !window.screenY);
                $('.pg-precog-ide .pg-fullscreen span.k-link').text(isfullscreen ? "reduce" : "fullscreen");
            }
            if(document.addEventListener) {
                document.addEventListener("fullscreenchange", toggle, false);
                document.addEventListener("mozfullscreenchange", toggle, false);
                document.addEventListener("webkitfullscreenchange", toggle, false);
            }
            toggle();
            return function(n) {
                if(!n) {
                    n = doc.documentElement;
                }
                if(isfullscreen) {
                    exitFullScreen(n);
                } else {
                    requestFullScreen(n);
                }
            }
        })();

        var changeIdeTheme = function (skinName) {
            var kendoLinks = $("link[href*='kendo.']", doc.getElementsByTagName("head")[0]),
                commonLink = kendoLinks.filter("[href*='kendo.common']"),
                skinLink = kendoLinks.filter(":not([href*='kendo.common'])"),
                currentFolder = new Array(location.href.match(/\//g).length - initialFolder + 1).join("../"),
                extension = /\.less$/.test(skinLink.attr("href")) ? ".less" : ".css",
                url = currentFolder + commonLink.attr("href").replace(skinRegex, "kendo." + skinName + "$1" + extension),
                exampleElement = $("#example");

            function replaceTheme() {
                var oldSkinName = $(doc).data("kendoSkin");

                if ($.browser.msie) {
                    $(doc.createStyleSheet(url));
                } else {
                    var newLink = skinLink.eq(0).clone().attr("href", url);
                    skinLink.eq(0).before(newLink);
                }

                skinLink.remove();

                if (exampleElement.length) {
                    exampleElement[0].style.cssText = exampleElement[0].style.cssText;
                }

                $(doc).data("kendoSkin", skinName);
                $(doc.documentElement).removeClass("k-" + oldSkinName).addClass("k-" + skinName);
            }

            replaceTheme();
        };

        var uid = (function() {
            var uid = 0,
                editors = configIde.keys("editors");

            var re = /^query #(\d+)$/, m;
            function extractNumber(s) {
                if(m = re.exec(s)) {
                    return parseInt(m[1]);
                } else {
                    return null;
                }
            }

            for(var i = 0; i < editors.length; i++) {
                var v = extractNumber(editors[i]);
                if(v && v > uid) {
                    uid = v;
                }
            }
            return uid;
        })();
        var editorContext = function (el, editors) {
            function changeEditorTheme(theme) {
                for(var key in editors) {
                    if(editors.hasOwnProperty(key)) {
                        editors[key].changeTheme(theme);
                    }
                }
            }

            function htmlMainMenu() {
                return '<div class="k-toolbar">' +
                    '<a href="http://precog.io/" target="_blank"><span class="pg-logo pg-precog"></span></a>' +
                    '<a href="#" class="pg-config-button k-button"><span class="k-icon pg-icon pg-settings"></span></a>' +
                    '<a href="#" class="pg-fullscreen k-button"><span class="k-icon pg-icon pg-maximize"></span></a>' +
                    '</div>' +
                    '<ul class="pg-config-menu k-widget k-popup">' +
                        '<li class="k-item k-state-focused">light themes:</li>' +
                        '<li data-editor-theme="default" class="k-item editor-theme">default</li>' +
                        '<li data-editor-theme="tomorrow_night" class="k-item editor-theme">tomorrow night</li>' +
                        '<li class="k-item k-state-focused">dark themes:</li>' +
                        '<li data-editor-theme="merbivore_soft" class="k-item editor-theme">merbivore soft</li>' +
                        '<li data-editor-theme="pastel_on_dark" class="k-item editor-theme">pastel on dark</li>' +
                    '</ul>'
                ;
            }

            function htmlMainBar() {
                return "<div class=\"pg-left-bar\"><a href=\"http://quirrel-lang.org/\" target=\"_blank\"><span class=\"pg-logo pg-quirrel\"></span></a> IDE</div><div class=\"pg-right-bar\">" + htmlMainMenu() + "</div>";
            }

            function htmlEditorBar() {
                return '<div class="pg-editor-toolbar">' +
                    '<a class="pg-add-editor-button k-button"><span class="k-icon pg-icon pg-new"></span></a>' +
                    '<a class="pg-download-editor-button k-button"><span class="k-icon pg-icon pg-download"></span></a>' +
                    '</div>'
                ;
            }

            function htmlDownloadQuirrelSnippet(languages) {
                var buttons = [];
                for(var i = 0; i < languages.length; i++) {
                    buttons.push('<a href="#" class="k-button pg-quirrel-to pg-quirrel-to-'+languages[i].token+'">'+languages[i].name+'</a>');
                }
                return '<div class="pg-quirrel-download">' +
                        '<form method="POST" action="'+downloadQueryService+'">' +
                            '<div class="k-toolbar pg-toolbar">' +
                                buttons.join(' ') +
                            '</div>' +
                            '<div class="k-copy-container">' +
                                '<textarea class="pg-quirrel-code-copier" name="code"></textarea>' +
                                '<input type="hidden" name="name" value="">' +
                            '</div>' +
                            '<div class="k-toolbar pg-toolbar pg-actions">' +
                                '<a href="#" class="k-button pg-quirrel-action-copy">copy</a> ' +
                                '<button type="submit" class="k-button pg-quirrel-action-download">download</button> ' +
                            '</div>' +
                        '</form>' +
                    '</div>'
                ;
            }

            function createEditorContainer(uid) {
                var tab = tabs.append({
                    text : '<span class="pg-editor-tab"> <span class="pg-unsaved">*</span>'+uid+' <span class="k-icon pg-sprite pg-icon pg-close pg-tab-close"></span></span>',
                    encoded : false,
                    content : '<div class="pg-editor-container"></div>'
                }).items()[tabs.items().length - 1];
                $(tab).data("uid", uid).find('.k-icon').click((function(uid) {
                    return function(){
                        if(configIde.keys("editors").length == 1)
                            return;
                        tabs.remove($(this).closest("li"));
                        configIde.remove("editors." + uid);
                        tabs.select(tabs.items().length - 1);
                    }
                })(uid));
                return editorsContainer.find(".pg-editor-container:last");
            }

            var mainbar = el.append('<div class="pg-main-bar k-widget k-reset k-header">'+htmlMainBar()+'</div>'),
                themeMap = {
                    "default" : "default",
                    "tomorrow_night" : "default",
                    "merbivore_soft" : "blackprecog",
                    "pastel_on_dark" : "blackprecog"
                };

            contextMenu({
                trigger: el.find('.pg-config-button'),
                leftButton: true,
                rightButton: true,
                menu: el.find('.pg-config-menu')
            });

            function changeTheme(theme) {
                if(!theme) theme = "default";
                mainbar.find('ul .editor-theme')
                    .removeClass('k-state-selected')
                    .each(function() {
                        if($(this).attr("data-editor-theme") == theme)
                            $(this).addClass('k-state-selected');
                    });
                changeEditorTheme(theme);
                changeIdeTheme(themeMap[theme]);
            }

            mainbar.find('ul .editor-theme').click(function (e) {
                configIde.set("theme", $(this).attr('data-editor-theme'));
                changeTheme(configIde.get("theme"));
                e.preventDefault(); return false;
            });
            mainbar.find('.pg-fullscreen').click(function(e) {
                toggleFullScreen(el.get(0));
                e.preventDefault(); return false;
            });


            var editorsContainer = el.append('<div class="pg-editors"></div>').find(".pg-editors");
            editorsContainer.before(htmlEditorBar());

            el.find('.pg-add-editor-button').click(function() {
                window.PrecogIDE.createEditor();
                tabs.select(tabs.items().length - 1);
            });

            function quirrelToOneLine(code) {
                return code
                    .replace(/--(.*)$/mg, '(- $1 -)')
                    .replace(/(\s+)/mg, ' ')
                    .replace(/"/g, '\"')
                    .trim()
                ;
            }

            el.find('.pg-download-editor-button').click((function() {
                var config = window.Precog.$.Config,
                    tokenId = config.tokenId,
                    service = config.analyticsService;

                var languages = [{
                    token: "qrl",
                    name : "Quirrel",
                    handler : function(code) {
                        return "# Quirrel query generated with Quirrel IDE by Precog\n\n" + code.trim();
                    }
                }, {
                    token: "js",
                    name : "JavaScript",
                    handler : function(code) {
                        code = quirrelToOneLine(code);
                        return "// Quirrel query in JavaScript generated with Quirrel IDE by Precog\n\n" +
                            'Precog.query("'+code+'",\n\tfunction(data) { /* do something with the data */ },\n\tfunction(error) { console.log(error); }\n);';
                    }
                }, {
                    token: "html",
                    name : "HTML",
                    handler : function(code) {
                        code = quirrelToOneLine(code);
                        return '<!DOCTYPE html>\n<html>\n<head>\n<title>Quirrel Query</title>\n<script src="http://api.reportgrid.com/js/precog.js?tokenId='+tokenId+'&analyticsService='+service+'"></script>\n' +
                            '<script>\n' +
                            "// Quirrel query in JavaScript generated with Quirrel IDE by Precog\n\n" +
                            'Precog.query("'+code+'",\n\tfunction(data) {\n\t\t/* do something with the data */\n\t\tconsole.log(data);\n\t},\n\tfunction(error) { console.log(error); }\n);\n' +
                            '</script>\n</head>\n<body></body>\n</html>'
                            ;
                    }
                }, {
                    token: "php",
                    name : "PHP",
                    handler : function(code) {
                        code = quirrelToOneLine(code);
                        return '<?php\n\n' +
                            "// Quirrel query in PHP generated with Quirrel IDE by Precog\n\n" +
                            'require_once("Precog.php");\n\n' +
                            '' +
                            '$precog = new PrecogAPI("'+tokenId+'", "'+service+'");\n$result = $precog->query("'+code+'");\n' +
                            'if(false === $precog) {\n' +
                            '\tdie($precog->errorMessage());\n' +
                            '} else {\n' +
                            '\t// do something with $result here\n' +
                            '}\n?>'
                            ;
                    }
                }];
                var cur;
                return function() {
                    var el = $(".pg-quirrel-download");
                    if(0 === el.length) {
                        el = $(document.body).append(htmlDownloadQuirrelSnippet(languages)).find(".pg-quirrel-download");
                        el.kendoWindow({
                            title : "Export Query",
                            modal : true,
                            width: 800,
                            height : 450,
                            overflow: "hidden",
                            resizable : false,
                            draggable : false
                        });

                        el.find('textarea').click(function(){
                            selectText(this);
                        });

                        for(var i = 0; i < languages.length; i++) {
                            el.find('.pg-quirrel-to-' + languages[i].token).click((function(lang) {
                                return function(e) {
                                    cur = lang.token;
                                    el.find('.pg-quirrel-to').removeClass('k-state-active');
                                    $(this).addClass('k-state-active');
                                    var code = window.PrecogIDE.ide.getSession().getValue();
                                    code = lang.handler(code);
                                    if(configIde.get("indentUsingSpaces", true)) {
                                        var len = configIde.get("tabWidth", 3),
                                            spaces = [];
                                        for(var i = 0; i < len; i++) {
                                            spaces.push(" ");
                                        }
                                        code = code.replace(/\t/g, spaces.join(""));
                                    }
                                    el.find('textarea').text(code);
                                    el.find('input[name=name]').val("query." + lang.token);
                                    e.preventDefault(); return false;
                                }
                            })(languages[i]));
                            if(i == 0)
                                el.find('.pg-quirrel-to-' + languages[i].token).click();
                        }

                        el.find('a.pg-quirrel-action-copy').zclip({
                            path:'js/zclip/ZeroClipboard.swf',
                            copy:function(){
                                return el.find('textarea').text();
                            }
                        });
                    } else {
                        el.find('.pg-quirrel-to-' + cur).click();
                    }
                    var win = el.data("kendoWindow");
                    win.center();
                    win.open();
                };
            })());

            el.kendoSplitter({
                panes : [
                    {scrollable:false,collapsible:false,resizable:false,size:"35px"},
                    {scrollable:false,collapsible:false,resizable:false,size:"0px"},
                    {scrollable:false,collapsible:false,resizable:false}
                ],
                orientation : "vertical"
            });
            var tabs = editorsContainer.kendoTabStrip({
                animation: false//,
                //collapsible: true
            });
            tabs = editorsContainer.data("kendoTabStrip");

            var resizeEditorContainers = function() {
                var height = editorsContainer.height() - editorsContainer.find('ul.k-tabstrip-items').outerHeight();
                editorsContainer.find('.pg-editor-container').height(height);
            };

            tabs.bind("activate", function(e) {
                $(window).resize(); // triggers the refresh of the panels sizes
                var li = e.item,
                    uid = $(li).data("uid");
                var ace = editors[uid].ace();
                window.PrecogIDE.ide = ace;
                setTimeout(function() { ace.focus(); }, 100);
            });

            return {
                selectTab : function(index) {
                    tabs.select(index);
                },
                resizeEditorContainers : resizeEditorContainers,
                createEditorContainer : createEditorContainer,
                changeTheme : changeTheme
            };
        };

        var buildEditor = function (context, config) {
            var lastResult, queryStartTime, queryLastExecutionTime = 2000,
                el = context.createEditorContainer(config.uid);
            var progressBar = function (elementSelector, percent) {
                if (!$(elementSelector).hasClass("pg-progress")) {
                    $(elementSelector).addClass("pg-progress");
                    $(elementSelector).append("<span class='k-slider-track' />");
                    $(elementSelector).find(".k-slider-track").width("100%").append("<span class='k-slider-selection' />");
                }

                if (percent) {
                    $(elementSelector).find(".k-slider-selection").width((percent * 100) + "%");
                }
            };

            function save() {
                configIde.set("editors."+config.uid, config);
            }

            function displayResults(data) {
                config.result = lastResult = data;
                config.error = null;
                save();
                endQuery();
                displayData();
            }

            function displayData() {
                if (!lastResult) {
                    return;
                }
                var out = el.find('.pg-output');
                switch(config.output)
                {
                    case "json":
                        out.html('<div class="pg-json ace_editor ace-tm k-scrollable">'+JSON.stringify(lastResult, null, configIde.get("tabWidth"))+'</div>');
                        break;
                    case "table":
                        var columns = [], data = lastResult, fields = {};
                        if("object" === typeof lastResult[0])
                        {
                            for(var key in data[0]) {
                                if (data[0].hasOwnProperty(key)) {
                                    columns.push({ field : key, title : key });
                                    fields[key] = { type : typeof data[0][key] };
                                }
                            }
                        } else {
                            var field = sess.getValue().trim().split("\n").pop();
                            if (!(/^[a-z0-9]+$/i).exec(field)) {
                                field = "value";
                            }
                            columns.push({ title : field, field : field });
                            fields.value = { type : typeof data[0] };
                            data = data.map(function (v) {
                                var o = {};
                                o[field] = v;
                                return o;
                            });
                        }
                        $(out.html('<table></table>').find("table")).kendoGrid({
                            columns : columns,
                            dataSource : {
                                schema : { model : { fields : fields } },
                                data : data,
                                pageSize: 20
                            },
                            groupable: columns.length > 1,
                            filterable : true,
                            scrollable: true,
                            sortable: true,
                            pageable: true
                        });
                        break;
                }
            }

            function displayError(message, content)
            {
                config.result = null;
                config.error = { message : message, content : content };
                save();
                endQuery();
                var msg = "";
                if(content instanceof Array)
                {
                    var lines = [];
                    for(var i = 0; i < content.length; i++)
                    {
                        var o = content[i],
                            line = o.message + "\nline " + o.lineNum + ", column "+ o.colNum + ": " + o.detail + "\n" + o.line + "\n";
                        for (var j = 1; j < o.colNum; j++) {
                            line += " ";
                        }
                        line += "^";
                        lines.push(line);
                    }
                    msg = lines.join("\n");
                } else if(content) {
                    msg = "" + content;
                } else {
                    msg = "error code " + message;
                }
                var out = el.find('.pg-output');
                out.html('<div class="ace_editor ace-tm"><div class="ace_line"><div class="ace_invalid">'+msg.split("\n").join('</div></div><div class="ace_line"><div class="ace_invalid">')+'</div></div></div>');
            }

            function executeQuery()
            {
                var query = aceui.getSession().getValue();
                startQuery();
                Precog.query(query, displayResults, displayError);
            }

            function setCode(code)
            {
                sess.setValue(code);
            }

            function updateCursor() {
                var pos = aceui.getCursorPosition();
                el.find(".pg-line").text(pos.row+1);
                el.find(".pg-column").text(pos.column+1);
            }

            function updateTextStats() {
                var text = config.code = sess.getValue();
                save();
                el.find(".pg-words").text(text.split(/\b[a-z0-9]+?\b/gi).length-1);
                el.find(".pg-characters").text(text.length);
            }

            function startQuery() {
                var html = el.find('.pg-execution-time').html('<span class="pg-bar"></span>').find('.pg-bar');
                queryStartTime = +new Date();
                function clamp(v) {
                    return v < 0 ? 0 : v > 1 ? 1 : v;
                }
                var first = true, kill = setInterval(function () {
                    if(!first && html.children().length === 0)
                    {
                        clearTimeout(kill);
                        return;
                    }
                    first = false;
                    progressBar(html, clamp((+new Date() - queryStartTime) / queryLastExecutionTime));
                }, 15);
            }

            function endQuery() {
                queryLastExecutionTime = +new Date() - queryStartTime;
                el.find('.pg-execution-time').html("execution: " + (Math.round(queryLastExecutionTime / 10) / 100) + " sec.");
            }

            var delayedUpdateTextStats = (function () {
                var kill;
                return function () {
                    if (kill) {
                        clearTimeout(kill);
                    }
                    kill = setTimeout(updateTextStats, 250);
                };
            })();

            function setTabSize(size, force)
            {
                if (!(force || sess.getTabSize() !== size)) {
                    return;
                }
                configIde.set("tabWidth", size);
                sess.setTabSize(size);
                el.find('.tab-width').removeClass('k-state-selected').each(function () {
                    if (size === parseInt($(this).attr("data-tab-width"), 10)) {
                        $(this).addClass('k-state-selected');
                    }
                });
                el.find(".pg-tab-width").text(size);
            }

            function setSoftTabs(toggle, force)
            {
                if (!(force || sess.getUseSoftTabs() !== toggle)) {
                    return;
                }
                configIde.set("indentUsingSpaces", toggle);
                sess.setUseSoftTabs(toggle);
                if(toggle)
                {
                    el.find('.softTabs').addClass("k-state-selected");
                } else {
                    el.find('.softTabs').removeClass("k-state-selected");
                }
            }

            function htmlStatusBar()
            {
                return '<ul>' +
                    '<li class="">tabs: <span class="pg-tab-width">'+configIde.get("tabWidth")+'</span>' +
                        '<ul>' +
                            '<li class="softTabs">indent using spaces</li>' +
                            '<li data-tab-width="1" class="tab-width">tab width: 1</li>' +
                            '<li data-tab-width="2" class="tab-width k-state-selected">tab width: 2</li>' +
                            '<li data-tab-width="3" class="tab-width">tab width: 3</li>' +
                            '<li data-tab-width="4" class="tab-width">tab width: 4</li>' +
                            '<li data-tab-width="5" class="tab-width">tab width: 5</li>' +
                            '<li data-tab-width="6" class="tab-width">tab width: 6</li>' +
                            '<li data-tab-width="7" class="tab-width">tab width: 7</li>' +
                            '<li data-tab-width="8" class="tab-width">tab width: 8</li>' +
                        '</ul>' +
                    '</li>' +
                    '<li class="k-state-disabled k-state-default">line <span class="pg-line">1</span>, column <span class="pg-column">1</span></li>' +
                    '<li class="k-state-disabled k-state-default">words <span class="pg-words">1</span>, characters <span class="pg-characters">1</span></li>' +
                    '<li class="k-state-disabled k-state-default"><span class="pg-execution-time"></span></li>' +
                    '</ul>';
            }

            function htmlOutputBar()
            {
                return '<div class="pg-left-bar"></div>' +
                    '<div class="pg-right-bar"><a href="#" class="pg-output-control k-button" data-output-type="table"><span class="k-sprite"></span>table</a><a href="#" class="pg-output-control k-button" data-output-type="json"><span class="k-sprite"></span>json</a></div>'
                    ;
            }

            el.addClass("k-content");
            el.html('<div class="pg-ide-query"><div class="pg-idecontainer" style="overflow:hidden"><div class="pg-ide"></div><a class="pg-runner k-button" href="#"><span class="k-sprite k-icon k-arrow-down"></span>run</a></div><div class="pg-output-panes"><div class="pg-output-toolbar k-widget k-reset k-header">'+htmlOutputBar()+'</div><div class="pg-output"></div><div class="pg-statusbar">'+htmlStatusBar()+'</div></div></div>');
            el.find('.pg-ide-query').height("100%");
            el.find(".pg-statusbar ul").css("z-index", 1000).kendoMenu({ direction: "top right" });
            // adjust arrow
            el.find('.pg-statusbar .k-arrow-down').each(function () {
                $(this).removeClass('k-arrow-down').addClass('k-arrow-up');
            });
            // wire tab width event
            el.find('.tab-width').click(function (e) {
                setTabSize(parseInt($(this).attr("data-tab-width"), 10));
                e.preventDefault(); return false;
            });
            // wire soft tabs
            el.find('.softTabs').click(function (e) {
                setSoftTabs(!configIde.get("indentUsingSpaces"));
                e.preventDefault(); return false;
            });
            // wire output controls
            el.find('.pg-output-control.k-button').click(function (e) {
                el.find('.pg-output-control.k-button .k-sprite').removeClass('k-icon k-insert');
                $(this).find(".k-sprite").addClass('k-icon k-insert');
                config.output = $(this).attr("data-output-type");
                save();
                displayData();
                e.preventDefault(); return false;
            }).each(function () {
                    if ($(this).attr("data-output-type") === config.output) {
                        $(this).find('.k-sprite').addClass("k-icon k-insert");
                    }
                });
            // wire execute button
            el.find('.pg-runner').click(function(e) {
                executeQuery();
                e.preventDefault(); return false;
            });

            var aceui = ace.edit(el.find(".pg-ide").get(0));
            aceui.commands.addCommand({
                bindKey: {
                    win: 'Shift-Return',
                    mac: 'Shift-Return|Command-Return',
                    sender: 'editor|cli'
                },
                exec: executeQuery
            });
            aceui.setShowPrintMargin(false);
            var sess = aceui.getSession();
            sess.setMode(new (require("ace/mode/quirrel").Mode)());
            sess.getSelection().on("changeCursor", updateCursor);
            sess.on("change", delayedUpdateTextStats);

            el.find('.pg-ide-query').kendoSplitter({
                panes: [
                    {collapsible:false, min:"100px",scrollable:false,resizable:true},
                    {collapsible:false, min:"100px", size:"50%",scrollable:false}
                ],
                orientation : "vertical",
                resize: (function () {
                    var kill;
                    return function (){
                        if (kill) {
                            clearTimeout(kill);
                        }
                        kill = setTimeout(function () {
                            var cont = el.find(".pg-idecontainer");
                            el.find(".pg-ide").width(cont.width()).height(cont.height());
                            aceui.resize();
                            displayData(); // TODO: dirty trick to resize the table
                        }, 100);
                    };
                })()
            });
            el.find('.pg-ide-query .pg-output-panes').kendoSplitter({
                panes : [
                    {collapsible:false, size:"35px",scrollable:false,resizable:false},
                    {collapsible:false, scrollable:false,resizable:false},
                    {collapsible:false, size:"28px",scrollable:false,resizable:false}
                ],
                orientation : "vertical"
            });

            setTabSize(configIde.get("tabWidth"), true);
            if (config.code) {
                setCode(config.code);
            }
            if (config.error) {
                displayError(config.error.message, config.error.content)
            } else if(config.result) {
                lastResult = config.result;
                displayData();
            }
            setSoftTabs(configIde.get("indentUsingSpaces"), true);

            updateCursor();
            updateTextStats();

            if(configIde.get("disableClientCache", true)) {
                window.Precog.cache.disable();
            } else {
                window.Precog.cache.enable();
            }

            var setEditorTheme = function (name) {
                if(name && 'default' !== name) {
                    loadSyncScript("js/ace/theme-"+name+".js", function() {
                        aceui.setTheme("ace/theme/" + name);
                    });
                } else {
                    aceui.setTheme();
                }
            };

            setEditorTheme(configIde.get("theme"));

            return {
                changeTheme : (function () {
                    var darkThemes = ["merbivore_soft", "pastel_on_dark"];
                    return function (name) {
                        setEditorTheme(name);
                        if(darkThemes.indexOf(name) >= 0)
                        {
                            loadCss("css/ide/pg-sprite-dark.css");
                        } else {
                            loadCss("css/ide/pg-sprite-light.css");
                        }
                    }
                })(),

                // DEBUG
                ace : function () { return aceui; }
            };
        };

        var editors = {}, context;
        function createEditor(c) {
            c = c || {};
            c.code = c.code || "";
            c.output = c.output || "table";
            c.uid = c.uid || ("query #"+(++uid));
            c.result = c.result || null;
            c.error = c.error || null;
            editors[c.uid] = buildEditor(context, c);
        }

        window.PrecogIDE.createEditor = createEditor;

        window.PrecogIDE.create = function (el) {
            el = $(el);
            el.addClass('pg-precog-ide');

            context = editorContext(el, editors);

            $(window).on("resize", context.resizeEditorContainers);

            var keys = configIde.keys("editors");
            for(var i=0; i<keys.length; i++) {
                createEditor(configIde.get("editors."+keys[i]));
            }
            if(keys.length == 0) {
                createEditor();
            }

            context.selectTab(keys.length - 1);
            context.changeTheme(configIde.get("theme"));

            return {
                editors : editors
            };
        };
        window.PrecogIDE.changeTheme = changeIdeTheme;
        window.PrecogIDE.clearConfig = configIde.clear;

        $(function() {
            window.PrecogIDE.ready();
        });
    }

    // load mandatory css/scripts
    loadCss(["css/kendoui/kendo.common.min.css", "css/kendoui/kendo.default.min.css", "css/ide/typography.css", "css/ide/controls.css"]);
    //"http://api.reportgrid.com/js/precog.js"
    loadSyncScript(["js/jquery/jstorage.js", "http://api.reportgrid.com/js/precog.js", "js/kendoui/kendo.web.min.js", "js/ace/ace.js", "js/ace/mode-quirrel-uncompressed.js", "js/zclip/jquery.zclip.min.js"], init);
})();