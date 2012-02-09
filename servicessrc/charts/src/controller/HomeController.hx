package controller;
import ufront.web.mvc.Controller;
import ufront.web.mvc.ContentResult;

class HomeController extends Controller
{
	public function new()
	{
		super();
	}
    public function index()
    {
        return new ContentResult(new template.Home().execute({
        	baseurl : App.BASE_URL,
        	url : new ufront.web.mvc.view.UrlHelper.UrlHelperInst(controllerContext.requestContext)
        }));
    }
}