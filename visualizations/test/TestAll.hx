import utest.Runner;
import utest.ui.Report;

class TestAll
{
	public static function addTest(runner : Runner)
	{
// commented test cases need to be updated
//		runner.addCase(new rg.controller.factory.TestFactoryAxis());
		runner.addCase(new rg.controller.factory.TestFactoryDataContext());
		runner.addCase(new rg.controller.factory.TestFactoryDataSource());
//		runner.addCase(new rg.controller.factory.TestFactoryVariableContexts());
//		runner.addCase(new rg.controller.factory.TestFactoryVariableDependent());
//		runner.addCase(new rg.controller.factory.TestFactoryVariableIndependent());
//		runner.addCase(new rg.controller.info.TestInfoDataContext());
		runner.addCase(new rg.controller.info.TestInfoDataSource());
		runner.addCase(new rg.controller.info.TestInfoLayout());
		runner.addCase(new rg.controller.info.TestInfoVariable());
		runner.addCase(new rg.controller.info.TestInfoVisualizationOption());

		runner.addCase(new rg.layout.TestGraph());
		runner.addCase(new rg.layout.TestNode());
		runner.addCase(new rg.layout.TestEdge());
		runner.addCase(new rg.layout.TestSugiyamaMethod());
//		runner.addCase(new rg.data.TestAxisOrdinal());
//		runner.addCase(new rg.data.TestDataProcessor());
//		runner.addCase(new rg.data.TestAxisGroupByTime());
		runner.addCase(new rg.data.source.TestRGDataSource());
		runner.addCase(new rg.data.source.rgquery.TestQueryParser());
		runner.addCase(new rg.data.source.rgquery.transform.TestTransformCount());
//		runner.addCase(new rg.data.source.rgquery.transform.TestTransformIntersectTime());
//		runner.addCase(new rg.data.source.rgquery.transform.TestTransformTimeSeries());
		runner.addCase(new rg.util.TestProperties());
		runner.addCase(new rg.view.frame.TestStack());
		runner.addCase(new rg.view.svg.panel.TestPanel());
		runner.addCase(new rg.view.svg.panel.TestSpace());
	}

	public static function main()
	{
		var runner = new Runner();
		addTest(runner);
		var report = Report.create(runner);
		runner.run();
	}
}