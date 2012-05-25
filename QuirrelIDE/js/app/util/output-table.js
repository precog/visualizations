define([
      "order!jquery"
    , "order!jlib/jqgrid/i18n/grid.locale-en"
    , "order!jlib/jqgrid/grid.base"
    , "order!jlib/jqgrid/grid.common"
    , "order!jlib/jqgrid/grid.formedit"
    , "order!jlib/jqgrid/grid.inlinedit"
    , "order!jlib/jqgrid/grid.celledit"
    , "order!jlib/jqgrid/grid.subgrid"
    , "order!jlib/jqgrid/grid.treegrid"
    , "order!jlib/jqgrid/grid.grouping"
    , "order!jlib/jqgrid/grid.custom"
    , "order!jlib/jqgrid/grid.tbltogrid"
    , "order!jlib/jqgrid/grid.import"
    , "order!jlib/jqgrid/jquery.fmatter"
    , "order!jlib/jqgrid/JsonXml"
    , "order!jlib/jqgrid/grid.jqueryui"
    , "order!jlib/jqgrid/grid.filter"
//      "jlib/slickgrid/jquery.event.drag-2.0.min"
//    , "jlib/slickgrid/slick.core"
//    , "jlib/slickgrid/jquery.event.drop-2.0.min"
//    , "jlib/slickgrid/slick.grid"
],

function() {
    var elPanel = $('<div class="ui-widget"><table class="pg-table" id="MYCOOLTABLE"></table></div>'),
        elOutput = elPanel.find('.pg-table');


//    console.log(elOutput.jqGrid);

    var grid = $("#MYCOOLTABLE").jqGrid({
        datatype: "local",
        height: 250,
        colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
        colModel:[
            {name:'id',index:'id', width:60, sorttype:"int"},
            {name:'invdate',index:'invdate', width:90, sorttype:"date"},
            {name:'name',index:'name', width:100},
            {name:'amount',index:'amount', width:80, align:"right",sorttype:"float"},
            {name:'tax',index:'tax', width:80, align:"right",sorttype:"float"},
            {name:'total',index:'total', width:80,align:"right",sorttype:"float"},
            {name:'note',index:'note', width:150, sortable:false}
        ],
        multiselect: true,
        caption: "Manipulating Array Data"
    });


    return {
        type : "table",
        name : "Table",
        panel : function() { return elPanel; },
        update : function(data) {

            var mydata = [
                {id:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"2",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"3",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"4",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"5",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"6",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"7",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"8",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"9",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"}
            ];
            for(var i=0;i<mydata.length;i++)
                elOutput.jqGrid('addRowData',i+1,mydata[i]);

        },
        resize : function() {

        }
    };
});