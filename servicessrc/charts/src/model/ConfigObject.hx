package model;

typedef ConfigObject = {
	
}

class ConfigObjects
{
	public static function createDefault() : ConfigObject
	{
		return { };
	}

	public static function overrideValues(config : ConfigObject, over : Dynamic)
	{
		return Objects.copyTo(over, config);
	}
}