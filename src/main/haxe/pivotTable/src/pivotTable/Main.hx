package pivotTable;

import pivotTable.PivotTable;

class Main {

  public static function main() {
    var rg = untyped __js__ ("ReportGrid");
    if (rg != null) Reflect.setField(rg, "pivotTable", PivotTableFactory);
  }
}