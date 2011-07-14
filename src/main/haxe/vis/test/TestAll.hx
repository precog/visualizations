import utest.Runner;
import utest.ui.Report;

class TestAll 
{
	public static function addTest(runner : Runner)
	{
		runner.addCase(new rg.data.TestAxisOrdinal());
		runner.addCase(new rg.data.TestTransform());
		runner.addCase(new rg.data.TestSources());
		runner.addCase(new rg.data.source.TestRGDataSource());
		runner.addCase(new rg.data.source.rgquery.transform.TestCountTimeIntersectTransform());
		runner.addCase(new rg.data.source.rgquery.transform.TestCountTimeSeriesTransform());
		runner.addCase(new rg.data.source.rgquery.transform.TestCountTransform());
	}
	
	public static function main() 
	{
		var runner = new Runner();
		addTest(runner);
		var report = Report.create(runner);
		runner.run();
	}
}