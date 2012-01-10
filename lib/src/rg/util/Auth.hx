package rg.util;

class Auth 
{
	var test : String;
	public function new(authCode : String)
	{
		test = Decrypt.decrypt(authCode);
	}

	public function authorize(host : String)
	{
		return test == host;
	}

	public function authorizeMany(hosts : Array<String>)
	{
		var auth = false;
		for(host in hosts)
		{
			if(authorize(host))
			{
				auth = true;
				break;
			}
		}
		return auth;
	}
}