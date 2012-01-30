import utest.Runner;
import utest.ui.Report;

class TestAll
{
	public static function addTest(runner : Runner)
	{
// commented test cases need to be updated
//		runner.addCase(new rg.factory.TestFactoryAxis());
		runner.addCase(new rg.factory.TestFactoryDataContext());
		runner.addCase(new rg.factory.TestFactoryDataSource());
//		runner.addCase(new rg.factory.TestFactoryVariableContexts());
//		runner.addCase(new rg.factory.TestFactoryVariableDependent());
//		runner.addCase(new rg.factory.TestFactoryVariableIndependent());
//		runner.addCase(new rg.info.TestInfoDataContext());
		runner.addCase(new rg.info.TestInfoDataSource());
		runner.addCase(new rg.info.TestInfoLayout());
		runner.addCase(new rg.info.TestInfoVariable());
		runner.addCase(new rg.info.TestInfoVisualizationOption());

		runner.addCase(new rg.graph.TestGraph());
		runner.addCase(new rg.graph.TestGraphCollection());
		runner.addCase(new rg.graph.TestGraphLayout());
		runner.addCase(new rg.graph.TestNode());
		runner.addCase(new rg.graph.TestEdge());
		runner.addCase(new rg.graph.TestOneCycleRemover());
		runner.addCase(new rg.graph.TestTwoCycleRemover());
		runner.addCase(new rg.graph.TestEdgeSplitter());
		runner.addCase(new rg.graph.TestGreedySwitchDecrosser());

		runner.addCase(new rg.graph.TestGreedyCyclePartitioner());
		runner.addCase(new rg.graph.TestLongestPathLayer());

		runner.addCase(new rg.graph.TestSugiyamaMethod());
//		runner.addCase(new rg.data.TestAxisOrdinal());
//		runner.addCase(new rg.data.TestDataProcessor());
//		runner.addCase(new rg.data.TestAxisGroupByTime());
		runner.addCase(new rg.data.source.TestRGDataSource());
		runner.addCase(new rg.data.source.rgquery.TestQueryParser());
		runner.addCase(new rg.data.source.rgquery.transform.TestTransformCount());
//		runner.addCase(new rg.data.source.rgquery.transform.TestTransformIntersectTime());
//		runner.addCase(new rg.data.source.rgquery.transform.TestTransformTimeSeries());
		runner.addCase(new rg.util.TestProperties());
		runner.addCase(new rg.frame.TestStack());
		runner.addCase(new rg.svg.panel.TestPanel());
		runner.addCase(new rg.svg.panel.TestSpace());
	}

	public static function main()
	{
		var runner = new Runner();
		addTest(runner);
		var report = Report.create(runner);
		runner.run();
	}
}