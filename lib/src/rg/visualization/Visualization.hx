/**
 * ...
 * @author Franco Ponticelli
 */

package rg.visualization;
import thx.error.AbstractMethod;
import rg.data.VariableDependent;
import rg.data.VariableIndependent;
import rg.data.Variable;
import rg.axis.IAxis;
import hxevents.Notifier;
import hxevents.Dispatcher;
import dhx.Selection;
using Arrays;

class Visualization
{
	public var independentVariables(default, null) : Array<VariableIndependent<Dynamic>>;
	public var dependentVariables(default, null) : Array<VariableDependent<Dynamic>>;
	public var variables(default, null) : Array < Variable < Dynamic, IAxis<Dynamic> >> ;
	public var container(default, null) : Selection;
	var ready : Notifier;
	var error : hxevents.Dispatcher<Dynamic>;
	var hasRendered : Bool;

	private function new(container : Selection)
	{
		this.container = container;
	}

	public function setVariables(variables : Array<Variable<Dynamic, IAxis<Dynamic>>>, independentVariables : Array<VariableIndependent<Dynamic>>, dependentVariables : Array<VariableDependent<Dynamic>>)
	{
		this.variables = variables;
		this.independentVariables = independentVariables;
		this.dependentVariables = dependentVariables;
		hasRendered = false;
		ready = new Notifier();
		ready.addOnce(function() hasRendered = true);
		error = new Dispatcher();
		error.addOnce(function(_) ready.dispatch());
	}

	public function init()
	{
		try {
			_init();
		} catch(e : Dynamic) {
			error.dispatch(e);
		}
	}

	function _init() {
		throw new AbstractMethod();
	}

	public function feedData(data : Array<Dynamic>)
	{
		try {
			_feedData(data);
		} catch(e : Dynamic) {
			error.dispatch(e);
		}
	}

	function _feedData(data : Array<Dynamic>)
	{

	}

	public function destroy()
	{

		try {
			_destroy();
		} catch(e : Dynamic) {
			error.dispatch(e);
		}
	}

	function _destroy()
	{

	}

	public function addReadyOnce(handler : Void -> Void)
	{
		ready.addOnce(handler);
		if (hasRendered)
			handler();
	}

	public function addReady(handler : Void -> Void)
	{
		ready.add(handler);
		if (hasRendered)
			handler();
	}

	public function removeReady(handler : Void -> Void)
	{
		ready.remove(handler);
	}

	public function addError(handler : Dynamic -> Void)
	{
		error.add(handler);
	}
}