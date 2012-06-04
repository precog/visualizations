define([
      "order!jquery"
    , "order!ui/jquery.ui.sortable"
    , "order!jlib/slickgrid/jquery.event.drag-2.0.min"
    , "order!jlib/slickgrid/slick.core"
    , "order!jlib/slickgrid/slick.grid"
//    , "order!jlib/slickgrid/slick.groupitemmetadataprovider"
    , "order!jlib/slickgrid/slick.dataview"
    , "order!jlib/slickgrid/slick.pager"
    , "order!jlib/slickgrid/slick.columnpicker"
],

function() {
    var elPanel = $('<div class="ui-widget"><div class="pg-table" style="height:100%;width:100%"></div></div>'),
        elOutput = elPanel.find('.pg-table'),
        dataView = new Slick.Data.DataView(),
        grid,
        options = {
              enableCellNavigation: false
            , enableColumnReorder: true
            , autoHeight : false
            , forceFitColumns: true
            , multiColumnSort: true
        };
    dataView.setPagingOptions({
        pageSize: 20
    });
    dataView.onRowCountChanged.subscribe(function (e, args) {
        console.log("ROW COUNT");
        if(!grid) return;
        grid.updateRowCount();
        grid.render();
    });
    dataView.onRowsChanged.subscribe(function (e, args) {
        console.log("ROW CHANGED");
        if(!grid) return;
        grid.invalidateRows(args.rows);
        grid.render();
    });

    function createModel(value) {
        var columns = [];
        if("object" === typeof value) {
            for(var key in value) {
                if(value.hasOwnProperty(key) && key !== "#id") {
                    columns.push({
                          id : key
                        , name : key
                        , field : key
                        , sortable: true

                        , pgvalue : false
                    });
                }
            }
        } else {
            columns.push({
                id : "value",
                name : "Value",
                field : "value",
                pgvalue : true
            });
        }
        return columns;
    }

    function transformData(model, data) {
        var result = [];
        if(model.length != 1 || !model[0].pgvalue) {
            for(var i = 0; i < data.length; i++) {
                data[i]["#id"] = "#" + i;
                result.push(data[i]);
            }
        } else {
            for(var i = 0; i < data.length; i++) {
                result.push({ value : data[i], "#id" : "#" + i });
            }
        }
        return result;
    }

    function updateDataView(data) {
        dataView.beginUpdate();
        dataView.setItems(data, "#id");
        dataView.endUpdate();
    }

    return {
        type : "table",
        name : "Table",
        panel : function() { return elPanel; },
        toolbar : function() {
            return $('<div></div>');
        },
        update : function(data) {
            if(grid) grid.destroy();

            var model = createModel(data[0]);

            data = transformData(model, data);
            console.log(JSON.stringify(data));

            updateDataView(data);
            grid = new Slick.Grid(elOutput, dataView, model, options);
            grid.resizeCanvas();

            grid.onSort.subscribe(function (e, args) {
                var cols = args.sortCols;

                data.sort(function (dataRow1, dataRow2) {
                    for (var i = 0, l = cols.length; i < l; i++) {
                        var field = cols[i].sortCol.field;
                        var sign = cols[i].sortAsc ? 1 : -1;
                        var value1 = dataRow1[field], value2 = dataRow2[field];
                        var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
                        if (result != 0) {
                            return result;
                        }
                    }
                    return 0;
                });

                updateDataView(data);
            });
            new Slick.Controls.Pager(dataView, grid, this.toolbar);
        },
        resize : function() {
            if(grid) grid.resizeCanvas();
        }
    };
});