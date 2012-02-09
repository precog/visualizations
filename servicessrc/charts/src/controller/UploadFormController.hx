package controller;
import ufront.web.mvc.ContentResult;
import ufront.web.mvc.Controller;
import ufront.web.mvc.ActionResult;
import ufront.web.mvc.ForwardResult;

class UploadForm extends Controller
{
	public function display(?html : String, ?config : String) : Dynamic
	{
		var ob = {
        	baseurl : App.BASE_URL,
			url : new ufront.web.mvc.view.UrlHelper.UrlHelperInst(controllerContext.requestContext),
			html : html,
			config : config,
			errors : new Hash()
		};
		if(this.controllerContext.request.httpMethod == "POST")
		{
			var haserrors = false;
			if(null == html || '' == (html = StringTools.trim(html)))
			{
				haserrors = true;
				ob.errors.set("html", "html cannot be left empty");
			} else if(html.toLowerCase().indexOf("reportgrid") < 0) {
				haserrors = true;
				ob.errors.set("html", "html does not contain any reference to reportgrid");
			}
			if(null != config && config != '')
			{
				config = StringTools.trim(config);
				try {
					thx.ini.Ini.decode(config);
				} catch(e : Dynamic)
				{
					haserrors = true;
					ob.errors.set("config", "the config file is not well formed: " + e);
				}
			}
			if(!haserrors)
			{
				var controller = ufront.web.mvc.DependencyResolver.current.getService(controller.UploadAPIController);
				controller.controllerContext = this.controllerContext;
				return controller.upload(html, config, 'html');
			}
		} else {
			if(null == html && null == config)
			{
				ob.html = '<?DOCTYPE html>
<html>
<head>
<title>Viz</title>
<script src="http://api.reportgrid.com/js/reportgrid-core.js?tokenId=$tokenId"></script>
<script src="http://api.reportgrid.com/js/reportgrid-charts.js"></script>
<script src="http://api.reportgrid.com/js/reportgrid-query.js"></script>
<link type="text/css" href="http://api.reportgrid.com/css/rg-charts.css" rel="stylesheet">
</head>
<body>
<div id="chart"></div>
<script>
ReportGrid.pieChart("#chart", {
  data : [{browser:"chrome",count:100},{browser:"firefox",count:80}],
  axes : ["browser","count"],
  options : {
  	effect : "noeffect"
  }
});
</script>
</body>
</html>';
				ob.config = 'cache=2 days
parameters=tokenId
[defaults]
tokenId=1234567890';
			}
		}
		return new ContentResult(new template.FormUpload().execute(ob));
	}
}