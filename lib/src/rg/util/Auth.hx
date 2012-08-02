package rg.util;

class Auth
{
	var tests : Array<String>;
	public function new(authCode : String)
	{
		try {
			tests = Decrypt.decrypt(authCode).split(",");
		} catch(e : Dynamic) {
		}
	}

	public function authorize(host : String)
	{
		for(test in tests)
		{
			if(authorizeOne(host, test))
			{
				return true;
			}
		}
		return false;
	}

	function authorizeOne(host : String, test : String)
	{
		if(host.substring(0, 2) == "*.")
		{
			return StringTools.endsWith("."+test, host.substring(1));
		} else {
			return test == host;
		}
	}

	public function authorizeMany(hosts : Array<String>)
	{
		for(host in hosts)
		{
			if(authorize(host))
			{
				return true;
			}
		}
		return false;
	}
}