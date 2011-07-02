/**
 * ...
 * @author Franco Ponticelli
 */

package rg.svg;

class SvgBaloonShape 
{

	public static function shape(width : Float, height : Float, rc : Float, rp : Float, side : Int, offset : Float) 
	{
		var w = width - rc * 2,
			h = height - rc * 2;

		var buf = "M" + rc + ",0";
	
		// top
		if (0 == side)
		{
			buf += "h" + offset;
			buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + -rc;
			buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + rc;
			buf += "h" + (w - (offset + 2 * rc));
		} else
			buf += "h" + w;
		// top-right
		buf += "a" + rc + "," + rc + ",0,0,1," + rc + "," + rc;
		// right
		if (1 == side)
		{
			buf += "v" + (offset - rc);
			buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + rc;
			buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + rc;
			buf += "v" + (h - (offset + rc));
		} else
			buf += "v" + h;
		// bottom-right
		buf += "a" + rc + "," + rc + ",0,0,1," + -rc + "," + rc;
		// bottom
		if (2 == side)
		{
			buf += "h" + -(w - (offset + 2 * rc));
			buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + rc;
			buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + -rc;
			buf += "h" + -(offset);
		} else
			buf += "h" + -w;
		// bottom-left
		buf += "a" + rc + "," + rc + ",0,0,1," + -rc + "," + -rc;
		// left
		if (3 == side)
		{
			buf += "v" + -(h - (offset + rc));
			buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + -rc;
			buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + -rc;
			buf += "v" + -(offset - rc);
		} else
			buf += "v" + -h;
		// top-left
		buf += "a" + rc + "," + rc + ",0,0,1," + rc + "," + -rc;
		
		return buf + "Z"
		;
	}
}