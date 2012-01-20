package rg.data.reportgrid;

import hxevents.Dispatcher;
import rg.data.DataPoint;

interface IDataSource 
{
	public var onLoad(default, null) : Dispatcher<Array<DataPoint>>;
	public function load() : Void;
}