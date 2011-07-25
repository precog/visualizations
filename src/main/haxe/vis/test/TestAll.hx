import utest.Runner;
import utest.ui.Report;

class TestAll 
{
	public static function addTest(runner : Runner)
	{
		runner.addCase(new rg.controller.factory.TestFactoryAxis());
		runner.addCase(new rg.controller.factory.TestFactoryDataContext());
		runner.addCase(new rg.controller.factory.TestFactoryDataSource());
		runner.addCase(new rg.controller.factory.TestFactoryVariableContexts());
		runner.addCase(new rg.controller.factory.TestFactoryVariableDependent());
		runner.addCase(new rg.controller.factory.TestFactoryVariableIndependent());
		runner.addCase(new rg.controller.info.TestInfoDataContext());
		runner.addCase(new rg.controller.info.TestInfoDataSource());
		runner.addCase(new rg.controller.info.TestInfoSvgOption());
		runner.addCase(new rg.controller.info.TestInfoVariable());
		runner.addCase(new rg.controller.info.TestInfoVisualizationOption());
		runner.addCase(new rg.data.TestAxisOrdinal());
		runner.addCase(new rg.data.TestDataProcessor());
		runner.addCase(new rg.data.source.TestRGDataSource());
		runner.addCase(new rg.data.source.rgquery.TestQueryParser());
		runner.addCase(new rg.data.source.rgquery.transform.TestCountTimeIntersectTransform());
		runner.addCase(new rg.data.source.rgquery.transform.TestCountTimeSeriesTransform());
		runner.addCase(new rg.data.source.rgquery.transform.TestCountTransform());
		runner.addCase(new rg.util.TestProperties());
		runner.addCase(new rg.view.frame.TestStack());
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