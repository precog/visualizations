/* ***** BEGIN LICENSE BLOCK *****
* The Original Code is Ajax.org Code Editor (ACE).
*
* Contributor(s):
*      Jonathan Camile <jonathan.camile AT gmail DOT com>
*
* Alternatively, the contents of this file may be used under the terms of
* either the GNU General Public License Version 2 or later (the "GPL"), or
* the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
* in which case the provisions of the GPL or the LGPL are applicable instead
* of those above. If you wish to allow use of your version of this file only
* under the terms of either the GPL or the LGPL, and not to allow others to
* use your version of this file under the terms of the MPL, indicate your
* decision by deleting the provisions above and replace them with the notice
* and other provisions required by the GPL or the LGPL. If you do not delete
* the provisions above, a recipient may use your version of this file under
* the terms of any one of the MPL, the GPL or the LGPL.
*
* ***** END LICENSE BLOCK ***** */

define('ace/mode/quirrel', ['require', 'exports', 'module' , 'ace/lib/oop', 'ace/mode/text', 'ace/tokenizer', 'ace/mode/quirrel_highlight_rules', 'ace/range'], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var QuirrelHighlightRules = require("./quirrel_highlight_rules").QuirrelHighlightRules;
var Range = require("../range").Range;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new QuirrelHighlightRules().getRules());
};
oop.inherits(Mode, TextMode);

(function() {

    this.toggleCommentLines = function(state, doc, startRow, endRow) {
        var outdent = true;
        var outentedRows = [];
        var re = /^(\s*)--/;

        for (var i=startRow; i<= endRow; i++) {
            if (!re.test(doc.getLine(i))) {
                outdent = false;
                break;
            }
        }

        if (outdent) {
            var deleteRange = new Range(0, 0, 0, 0);
            for (var i=startRow; i<= endRow; i++)
            {
                var line = doc.getLine(i);
                var m = line.match(re);
                deleteRange.start.row = i;
                deleteRange.end.row = i;
                deleteRange.end.column = m[0].length;
                doc.replace(deleteRange, m[1]);
            }
        }
        else {
            doc.indentRows(startRow, endRow, "--");
        }
    };

}).call(Mode.prototype);

exports.Mode = Mode;

});
/* ***** BEGIN LICENSE BLOCK *****
 * The Original Code is Ajax.org Code Editor (ACE).
 *
 * Contributor(s):
 *      Jonathan Camile <jonathan.camile AT gmail DOT com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/mode/quirrel_highlight_rules', ['require', 'exports', 'module' , 'ace/lib/oop', 'ace/lib/lang', 'ace/mode/text_highlight_rules'], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var lang = require("../lib/lang");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var QuirrelHighlightRules = function() {

    var keywords = lang.arrayToMap(
        ("new|where").split("|")
    );

    var builtinConstants = lang.arrayToMap(
        ("true|false").split("|")
    );

    var builtinFunctions = lang.arrayToMap(
        ("with|count|dataset|load|max|mean|median|min|mode|stdDev|sum").split("|")
    );

    this.$rules = {
        "start" : [ {
            token : "comment",
            regex : "--.*$"
        }, {
            token : "comment",
            regex : "\\(-.*?-\\)"
        }, {
            token : "string",           // " string
            regex : '".*?"'
        }, {
            token : "constant.numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : "variable",
            regex : "'[a-zA-Z_][a-zA-Z0-9_]*\\b"
        }, {
            token : function(value) {
                if (keywords.hasOwnProperty(value))
                    return "keyword";
                else if (builtinConstants.hasOwnProperty(value))
                    return "constant.language";
                else if (builtinFunctions.hasOwnProperty(value))
                    return "support.function";
                else
                    return "identifier";
            },
            regex : "[a-zA-Z_][a-zA-Z0-9_]*\\b"
        }, {
            token : "constant",
            regex : "\\/(?:\\/[a-zA-Z0-9-]+)+"
        }, {
            token : "invalid",
            regex : "//"
        }, {
            token : "keyword.operator",
            regex : "::|:=|\\+|\\/|\\-|\\*|%|<|>|<=|=>|!=|<>|="
        }
        ]
    };
};

oop.inherits(QuirrelHighlightRules, TextHighlightRules);

exports.QuirrelHighlightRules = QuirrelHighlightRules;
});

