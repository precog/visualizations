/**
 * ...
 * @author Franco Ponticelli
 */

package rg.data.source.rgquery;

import rg.util.Properties;
import thx.error.Error;
import rg.data.source.rgquery.QueryAst;
using Arrays;

class QueryParser 
{
	var exp : Array<QExp>;
	var operation : QOperation;
	var where : Array<QCondition>;
	
	public function new()
	{
		exp = [];
		operation = Count;
		where = [];
	}
	
	public function parse(s : String) : Query
	{
		parseExp(s);
		return {
			exp : exp,
			operation : operation,
			where : where
		};
	}
	
	function parseExp(e : String)
	{
		var tokens = e.split("*").map(function(d, _) return StringTools.trim(d));
		for (token in tokens)
		{
			var etoken = parseToken(token);
			if (null != etoken)
				exp.push(etoken);
		}
	}
	
	
	
	static var TOKEN_SPLIT = ~/and/gi;
	
	static function __init__()
	{
		var _PNAME = "((?:\\.?\\w+)+)",
			_LIMIT = "(?:\\s*[(]\\s*(\\d+)(?:\\s*,\\s*(ASC|DESC))?\\s*[)])?",
			_COND  = "(?:\\s*([=])\\s*(.+))";
		TOKEN_INDIVIDUAL_PARSE = new EReg('^' + _PNAME + _LIMIT + _COND+"?" + "$", "i");
		TOKEN_FIRST_PARSE = new EReg('^' + _PNAME + _LIMIT + _COND + "$", "i");
		TOKEN_CONDITION_PARSE = new EReg('^' + _PNAME + _COND + "$", "i");
	}
	
	static var TOKEN_INDIVIDUAL_PARSE : EReg;
	static var TOKEN_FIRST_PARSE : EReg;
	static var TOKEN_CONDITION_PARSE : EReg;
	function parseToken(token : String)
	{
		var pos;
		if (Properties.isTime(token))
			return Time(Properties.periodicity(token));
		else
			return processProperty(token);
	}
	
	function processProperty(token : String)
	{
		if ('(' == token.substr(0, 1))
			token = token.substr(1, token.length - 2);
		var parts = TOKEN_SPLIT.split(token),
			name : String = null, limit : Null<Int> = null, descending : Null<Bool> = null;
		if (parts.length == 1)
		{
			if (!TOKEN_INDIVIDUAL_PARSE.match(token))
				throw new Error("invalid individual expression '{0}'", token);
			name = TOKEN_INDIVIDUAL_PARSE.matched(1);
			if (null != TOKEN_INDIVIDUAL_PARSE.matched(2))
				limit = Std.parseInt(TOKEN_INDIVIDUAL_PARSE.matched(2));
			if (null != TOKEN_INDIVIDUAL_PARSE.matched(3))
				descending = TOKEN_INDIVIDUAL_PARSE.matched(3).toLowerCase() == "desc";
			
			if (null != TOKEN_INDIVIDUAL_PARSE.matched(4))
			{
				addWhereCondition(
					TOKEN_INDIVIDUAL_PARSE.matched(1),
					TOKEN_INDIVIDUAL_PARSE.matched(4),
					TOKEN_INDIVIDUAL_PARSE.matched(5)
				);
			}
		} else {
			if (!TOKEN_FIRST_PARSE.match(parts[0]))
				throw new Error("invalid first expression '{0}' in '{1}'", [parts[0], token]);
			name = TOKEN_FIRST_PARSE.matched(1);
			if (null != TOKEN_FIRST_PARSE.matched(2))
				limit = Std.parseInt(TOKEN_FIRST_PARSE.matched(2));
			if (null != TOKEN_FIRST_PARSE.matched(3))
				descending = TOKEN_FIRST_PARSE.matched(3).toLowerCase() == "desc";
				
			addWhereCondition(
				TOKEN_FIRST_PARSE.matched(1),
				TOKEN_FIRST_PARSE.matched(4),
				TOKEN_FIRST_PARSE.matched(5)
			);
			
			for (i in 1...parts.length)
			{
				if (!TOKEN_CONDITION_PARSE.match(parts[i]))
					throw new Error("invalid expression condition '{0}' in '{1}'", [parts[i], token]);
				addWhereCondition(
					TOKEN_CONDITION_PARSE.matched(1),
					TOKEN_CONDITION_PARSE.matched(2),
					TOKEN_CONDITION_PARSE.matched(3)
				);
			}
		}
		return Property(name, limit, descending);
	}
	
	function addWhereCondition(name : String, operator : String, value : String)
	{
		switch(operator)
		{
			case '=':
				where.push(Equality(name, parseValue(StringTools.rtrim(value))));
			default:
				throw new Error("invalid operator '{0}'", operator);
		}
	}
	
	static function parseValue(s : String) : Dynamic
	{
		var fc = s.substr(0, 1), lc = s.substr( -1);
		if (fc == lc && (fc == "'" || fc == '"'))
			return s.substr(1, s.length - 2);
		if (Bools.canParse(s))
			return Bools.parse(s);
		if (Ints.canParse(s))
			return Ints.parse(s);
		if (Floats.canParse(s))
			return Floats.parse(s);
		return throw new Error("invalid value '{0}'", s);
	}
}