/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data;
import rg.data.IDataSource;

class DataContext 
{
	public var name(default, null) : String;
	public var data(default, null) : DataProcessor;
	public var transform(default, null) : Dynamic;
	
	public function new(name : String, data : DataProcessor, transform : Dynamic) 
	{		
		this.name = name;
		this.data = data;
		this.transform = transform;
	}
}