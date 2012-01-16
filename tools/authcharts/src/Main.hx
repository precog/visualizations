import thx.sys.Web;
import thx.sys.Lib;
import thx.sys.Sys;
import chx.crypt.RSA;

class Main
{
	static var params = Web.getParams();
	static function main()
	{
		var host = params.get("host");
		if(null == host)
			out(null);
		var result = {
			host : host,
			key : encrypt(host)
		};

		out(result);
	}

	static function encrypt(s : String)
	{
		var rsa = new RSA(Key.modulus, Key.publicExponent, Key.privateExponent);
		return chx.formats.Base64.encode(rsa.sign(Bytes.ofString(s)));
	}

	static function out(o : Dynamic)
	{
		var cback = params.get("callback"),
			json = thx.json.Json.encode(o);
		if(null == cback)
			Lib.print(json);
		else
			Lib.print(cback + "(" + json + ");");
		Sys.exit(null == o ? 1 : 0);
	}
}