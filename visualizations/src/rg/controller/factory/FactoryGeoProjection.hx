/**
 * ...
 * @author Franco Ponticelli
 */

package rg.controller.factory;
import rg.controller.info.InfoMap;
import thx.error.Error;
import thx.geo.Albers;
import thx.geo.AlbersUsa;
import thx.geo.Azimuthal;
import thx.geo.IProjection;
import thx.geo.Mercator;

class FactoryGeoProjection 
{
	public function new() { }
	
	public function create(info : InfoMap) : IProjection
	{
		switch(info.projection.toLowerCase())
		{
			case "mercator":
				var projection = new Mercator();
				if (null != info.scale)
					projection.scale = info.scale;
				if (null != info.translate)
					projection.translate = info.translate;
				else
					projection.translate = [0.0, 0];
				return projection;
			case "albers":
				var projection = new Albers();
				if (null != info.scale)
					projection.scale = info.scale;
				if (null != info.translate)
					projection.translate = info.translate;
				else
					projection.translate = [0.0, 0];
				if (null != info.origin)
					projection.origin = info.origin;
				if (null != info.parallels)
					projection.parallels = info.parallels;
				return projection;
			case "albersusa":
				var projection = new AlbersUsa();
				if (null != info.scale)
					projection.scale = info.scale;
				if (null != info.translate)
					projection.translate = info.translate;
				else
					projection.translate = [0.0, 0];
				return projection;
			case "azimuthal":
				var projection = new Azimuthal();
				if (null != info.scale)
					projection.scale = info.scale;
				if (null != info.translate)
					projection.translate = info.translate;
				else
					projection.translate = [0.0, 0];
				if (null != info.mode)
					projection.mode = info.mode;
				if (null != info.origin)
					projection.origin = info.origin;
				return projection;
			default:
				return throw new Error("the projection '{0}' does not exist or is not implemented", [info.projection]);
		}
	}
}