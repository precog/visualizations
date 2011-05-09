package pivotTable;

import dom.Dom;
import dom.Env;
import dom.Console;
import dom.Double;
import Lambda;


using dom.HTMLDocumentExtensions;
using dom.HTMLEventExtensions;
using dom.HTMLElementExtensions;
using StringTools;
using Lambda;

typedef ReportGrid    = Dynamic;
typedef DateRange     = {
  start:  Float,
  end:    Float
};

typedef TableConfig = {
  rows: String,
  columns: String
};


class AbstractPivotTable {
  private var _rg:            ReportGrid;
  private var _fail:   String -> Void;

  public function new() {
    var self      = this;
    _rg           = untyped __js__ ("ReportGrid");
    _fail         = function(e) { Console.warning("Default Failure Called " + e); };
    
  }
  
  private function giveSearchResultsTo(path: String, queries: Array<Double<String>>, f: Int -> Void): Void {
    var query = {
      where : {
      }
    }
    queries.iter(function(double) { Reflect.setField(query.where, double._1, double._2); });
    _rg.searchCount(
      path,
      query,
      f,
      _fail
    );
  }
  
  private function giveValuesTo(path: String, fieldName: String, f: Array<String> -> Void): Void {
    var self = this;
    _rg.fieldValues(
      path, 
      {
        field: fieldName
      },
      f
    );
  }
  
  private function giveCountTo(path: String, fieldName: String, valueName: String, f: Int -> Void): Void {
    var self = this;
    _rg.fieldValueCount(
      path, 
      {
        field: fieldName,
        value: valueName
      },
      f
    );
  }
  
  private function givePathChildrenTo(path: String,  f: String -> Array<String> -> Void, ?field: String = null): Void {
    var options = {type : "path"};
    if (field != null) Reflect.setField(options, "field", field);
    _rg.children(path, options, function(c) { f(path, c); }, _fail );
  }
  
  private function giveAllChildrenTo(path: String, field: String, f: Array<String> -> Void): Void {
    var options = {type : "all"};
    if (field != null) Reflect.setField(options, "field", field);
    _rg.children(path, options, function(children: Array<String>) { f(children); }, _fail );
  }
  
  private function givePropertyChildrenTo(path: String, field: String, f: Array<String> -> Void): Void {
    var options = {type : "field"};
    if (field != null) Reflect.setField(options, "field", field);
    _rg.children(path, options, function(children: Array<String>) { f(children); }, _fail );
  }
  
}

class PivotTableFactory extends AbstractPivotTable {
  private var _path:              String;
  private var _rowPath:           String;
  private var _colPath:           String;
  private var _rows:              Dynamic;
  private var _cols:              Dynamic;
  private var _table:             HTMLElement;
  private var _config:            Dynamic;
  
  
  
  private var _rowsReady:         Bool;
  private var _colsReady:         Bool;
  
  public function new(tableId: String, path, config: TableConfig): Void {
    super();
    var self = this;
    _path                 = path;
    _rows                 = { reportGrid : true };
    _cols                 = { reportGrid : true };
    _rowPath              = config.rows;
    _colPath              = config.columns;
    _table                = Env.document.getId(tableId);
    _config               = config;
    
    _rowsReady            = false;
    _colsReady            = false;
    
    setupTable();
  }
  
  private function setupTable() {
    var self = this;
    setTableNames(_rows, _path, _rowPath, function() { self._rowsReady = true; self.buildTable(); });
    setTableNames(_cols, _path, _colPath, function() { self._colsReady = true; self.buildTable(); });
  }
  
  private function setTableNames(setField: Dynamic, path, eventPath: String, f: Void -> Void): Void {
    var self = this;
    giveValuesTo(path, eventPath, function(value) { Reflect.setField(setField, eventPath, value); f(); });
  }
  
  function buildTable() {
    if (_rowsReady && _colsReady) {
      
      new PivotTable(_table, Reflect.field(_rows, _rowPath), Reflect.field(_cols, _colPath), _path, _config);
    }
  }
}

class PivotTable extends AbstractPivotTable {
  private var _doc:         HTMLDocument;
  private var _config:      TableConfig;
  private var _parent:      HTMLElement;
  private var _pivotTable:  HTMLElement;
  private var _rows:        Array<String>;
  private var _cols:        Array<String>;
  private var _tr:          Array<HTMLElement>;
  private var _td:          Array<HTMLElement>;
  private var _index:       String;
  private var _path:        String;
  private var _eventId:     String;
  private var _rowId:       String;
  private var _colId:       String;
  
  public function new(e: HTMLElement, rows: Array<String>, cols: Array<String>, path: String, config: TableConfig) {
    super();
    _doc          = Env.document;
    _parent       = e;
    _config       = config;
    _rows         = rows;
    _cols         = cols;
    _tr           = [];
    _td           = [];
    _index        = "pivot-index-" + Std.string(Math.round(Math.random() * 99999)) + "-";
    _path         = path;
    _eventId      = toLabelText(config.rows.substr(0, config.rows.lastIndexOf(".")));
    _rowId        = toLabelText(config.rows.replace(_eventId, ""));
    _colId        = toLabelText(config.columns.replace(_eventId, ""));
    createTable();
  }
  
  private function createTable() {
    _pivotTable = _doc.newElement("table", [new Double("id", _index + "master"), new Double("width", "auto"), new Double("frame", "border"), new Double("cellspacing", "0"), new Double("border", "1"), new Double("cellpadding", "3")], "width: auto; text-align: center; px; height: auto; border-style: solid; padding: 1px;");
    _parent.appendChild(createHeaderTable());
    _doc.getId(_index + "container").appendChild(_pivotTable);
    createRows();
  }
  
  private function createHeaderTable(): HTMLElement {
    var headerTable = _doc.newElement("table", [new Double("id", _index + "headers"), new Double("border", "1"), new Double("cellpadding", "1"), new Double("cellspacing", "0"), new Double("frame", "border")], "position: relative; width: auto; height: auto;");
    headerTable.append(
      newHeaderRow().append(
        newHeaderColumn().append(
          newLabel(_eventId)
        )
      ).append(
        newHeaderColumn().append(
          newLabel(_colId)
        )
      )
    ).append(
      newHeaderRow().append(
        newHeaderColumn().append(
          newLabel(_rowId)
        )
      ).append(
        newColumn([new Double("id", _index + "container")])
      ).withStyle("textAlign", "left")
    );
    return headerTable;
  }
  
  private function createRows(): Void {
    addLabelSpaceToArrays();
    var self = this;
    for (i in 0..._rows.length) {
      var row = newRow([new Double(_index + "row", Std.string(i))]);
      _tr.push(row);
      _pivotTable.appendChild(row);
    }
    createColumns();
  }
  
  private function createColumns(): Void {
    var self = this;
    for (colIndex in 0..._cols.length) {
      for (rowIndex in 0..._tr.length) {
        var col = newColumn([new Double("id", toIndex(colIndex, rowIndex) ), new Double("width", 100 / _cols.length + "%")]);
        _td.push(col);
        _tr[rowIndex].appendChild(col);
      }
    }
    fillTableValues();
  }
  
  private function addLabelSpaceToArrays(): Void {
    _cols.unshift(" ");
    _rows.unshift(" ");
  }
  
  private function fillTableValues(): Void {
    applyLabels();
    applyCounts();
  }
  
  private function applyLabels(): Void {
    for (colIndex in 0..._cols.length) {
      setLabelElement(colIndex, 0, _cols[colIndex]);
    }
    for (rowIndex in 0..._rows.length) {
      setLabelElement(0, rowIndex, _rows[rowIndex]);
    }
  }
  
  private function applyCounts(): Void {
    var self = this;
    for (colIndex in 1..._cols.length) {
      for (rowIndex in 1..._rows.length) {
        giveSearchResultsTo(_path, [new Double(_config.rows, _rows[rowIndex]), new Double(_config.columns, _cols[colIndex])], function(count: Int) {
          self.setIndex(colIndex, rowIndex, Std.string(count));
        });
      }
    }
  }
  
  private function newRow(atts : Array<Double<String>>): HTMLElement {
    return _doc.newElement("tr", atts, "width: 100%; height: auto; text-align: center;");
  }
  
  private function newHeaderColumn(): HTMLElement {
    return _doc.newElement("td", [new Double("class",  "pivot-table-header")], "width: auto; height: auto; text-align: center;");
  }
  
  private function newHeaderRow(): HTMLElement {
    return _doc.newElement("tr", [new Double("class", "pivot-table-header")], "width: auto; height: auto; text-align: center;");
  }
  
  private function newColumn(atts : Array<Double<String>>): HTMLElement {
    return _doc.newElement("td", atts, "width: auto; height: auto;");
  }
  
  private function newLabel(text: String): HTMLElement {
    return _doc.newElement("span", [new Double("class", "pivot-table-label")], "font-weight: bold;").html(text);
  }
  
  private function newTableContent(text: String): HTMLElement {
    return _doc.newElement("span", [new Double("class", "pivot-table-content")], "width: 100%; text-align: center").html(text);
  }
  
  private function setLabelElement(col: Int, row: Int, text: String): HTMLElement {
    return getIndex(col, row).append(newLabel(text)).withStyle("backgroundColor", "#b5dfff");
  }
  
  private function toIndex(colIndex: Int, rowIndex: Int): String {
    return _index + Std.string(colIndex) + "x" + Std.string(rowIndex);
  }
  
  private function getIndex(x: Int, y: Int): HTMLElement {
    return _doc.getId(toIndex(x, y));
  }
  
  private function setIndex(x: Int, y: Int, text: String): HTMLElement {
    return getIndex(x, y).append(newTableContent(text));
  }
  
  private function toLabelText(s: String): String {
    return if (s.charAt(0) == ".") s.replace(".", ""); else s;
  }
  
}