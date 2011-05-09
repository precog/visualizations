function dump(v)
{
	switch(typeof v)
	{
		case "number": return v;
		case "string": return "'" + v + "'";
		case "boolean": return v;
		case "function": return "<function>";
		case "object":
			if(v instanceof Array)
			{
				var arr = [];
				for(i in v)
					arr.push(dump(v[i]));
				return "[" + arr.join(", ") + "]";
			} else {
				var fields = [];
				for(k in v)
					fields.push(k + " : " + dump(v[k]));
				return "{ " + fields.join(", ") + " }";
			}
		default: return "[undefined]";
	}
}