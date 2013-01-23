package rg.svg.util;
import rg.svg.widget.Label;

class PointLabel
{
	public static function label(container, text, x, y, shadow, outline)
	{
		if(null == text) return null;
		var label = new Label(container, true, shadow, outline);
		label.text = text;
		label.place(x, y, 0);
		return label;
	}
}