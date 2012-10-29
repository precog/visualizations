/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg.widget;

import thx.error.Error;
using Arrays;

class LabelOrientations
{
	static public function canParse(s : String)
	{
		var name = s.split(":")[0].toLowerCase();
		return ["angle", "fixed", "ortho", "orthogonal", "align", "aligned", "horizontal"].exists(name);
	}

	static public function parse(s : String)
	{
		var name = s.split(":")[0].toLowerCase();
		switch(name)
		{
			case "fixed", "angle":
				var v = Std.parseFloat(s.split(":")[1]);
				if (null == v || !Math.isFinite(v))
					throw new Error("when 'fixed' is used a number should follow the 'dash' character");
				return LabelOrientation.FixedAngle(v);
			case "ortho", "orthogonal":
				return LabelOrientation.Orthogonal;
			case "align", "aligned":
				return LabelOrientation.Aligned;
			case "horiz", "horizontal":
				return LabelOrientation.FixedAngle(0);
			default:
				throw new Error("invalid filter orientation '{0}'", s);
		}
	}
}