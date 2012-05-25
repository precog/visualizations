define([
      "util/ui"
    , "app/config/output-results"
    , "text!templates/toolbar.output.html"
],

function(ui, formats, tplToolbar) {
    var map = {};

    $.each(formats, function(_, format) {
        map[format.type] = format;
    });

    return function(el) {
        var wrapper,
            last = {
                result : null,
                type : null,
                current : null
            },
            elToolbar = el.find('.pg-toolbar').append(tplToolbar),
            elToolbarContext = el.find('.pg-toolbar-context'),
            elOutputs = elToolbar.find('.pg-output-formats'),
            elResult  = el.find('.pg-result');

        var i = 0; // TODO replace with globally unique values
        $.each(formats, function(_, format) {
            if(format.display)
            {
                var id = "radio" + (++i);
                format.display = elOutputs.append('<input type="radio" id="'+ id
                    + '" name="radio" data-format="'
                    + format.type
                    + '" /><label for="'+id+'">'
                    + format.name
                    + '</label>').find("#"+id);
                format.display.click(function() {
console.log("change to " + format.type);
                    if(format.type === last.type)
                    {
                        last.current = format.type;
                        return;
                    }
                    wrapper.set(last.result, format.type);
                });
            }

            format.panel = format.panel();
            elResult.append(format.panel);
            format.toolbar = format.toolbar();
            elToolbarContext.append(format.toolbar);

            $(format.toolbar).hide();
console.log("hiding " + format.name);
console.log(format.panel);
            $(format.panel).hide();
            $(format).on("update", function() {
                wrapper.set();
            });
//            console.log(format.panel);
//            container.addClass("pg-result-panel");

        });


        ui.buttonset(elOutputs);

        function resize() {
            if(map[last.type]) {
                var el = map[last.type].panel;
console.log("resize");
console.log(el);
                el.css({
                    width  : el.parent().width() + "px",
                    height : el.parent().height() + "px"
                });
                map[last.type].resize();
            }
        }

        function activatePanel(result, type) {
            if(type !== last.type) {
                if(last.type && map[last.type])
                {
                    map[last.type].deactivate();
                    $(map[last.type].toolbar).hide();
                    $(map[last.type].panel).hide();
console.log("hiding " + map[last.type].name);
                }
                $(map[type].toolbar).show();
console.log("showing " + map[type].name);
                $(map[type].panel).show();
                map[type].activate();
                resize();
            }
            if(map[type].display) {
                map[type].display[0].checked = true;
                map[type].display.button("refresh");
            }
            map[type].update(result);
        }

        return wrapper = {
            set : function(result, type) {
console.log("SET " + type);
                result = result || last.result || null;
                type = type || last.current || 'json';
                if(map[type]) {
                    activatePanel(result, type);
                } else {
                    activatePanel({ message : "invalid result type: " + type }, "error");
                }

                if(result) last.result = result;
                last.type = type;
                if(map[type] && map[type].display) {
                    last.current = type;
                    // change selection here
                }
            },
            last : last,
            resize : resize
        };
    }
});