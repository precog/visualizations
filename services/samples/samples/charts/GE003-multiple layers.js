//** DATA
var data = [
	"01","02","04","05","06","08","09","10","11","12","13","15","16","17","18","19","20",
	"21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37",
	"38","39","40","41","42","44","45","46","47","48","49","50","51","53","54","55","56",
	"72"].map(function(d, i) {
		return {
			'location' : d,
			count : Math.round(ReportGrid.math.random() * 100000)
		}
	});
data = [
	"02185","02290","02188","02180","02240","02090","02068","02180","02170","02270","02261",
	"02050","02020","02122","02122","02070","02164","02282","02050","02261","02232","02100",
	"02232","02110","02060","02150","02150","02232","02232","02232","02220","02150","02220",
	"02280","02280","02280","02013","02201","02201","02280","02130","02016","02016","27077",
	"53073","30029","30053","16021","30005","53065","53047","38067","27069","30041","38019",
	"53019","53051","30071","38095","27135","30105","30091","38023","30019","38075","38009",
	"38013","38079","30101","30035","30051","16017","38101","27071","53057","38105","38049",
	"27137","30085","53007","38061","38069","27089","38071","38099","27007","30073","53009",
	"38005","30015","53061","30089","27031","27075","38063","38035","27113","27119","53017",
	"30083","38053","53031","30099","30055","16079","30047","53063","27029","16055","30033",
	"27125","53025","53043","30049","53035","27061","38055","38103","38083","38027","38025",
	"30027","30021","53033","30013","38039","38091","38097","53045","30063","30077","30069",
	"53037","38031","38057","53027","53033","27087","27107","30061","27021","26083","23003",
	"30045","16009","27057","53053","30109","38033","38007","38015","38043","38093","38065",
	"26061","53001","53075","38003","38017","53067","30079","27005","27027","16057","53077",
	"30059","26131","27001","38089","38059","26013","55007","16035","26103","30017","30087",
	"30039","27159","27035","53041","53049","30007","26033","27017","26053","55031","30065",
	"26095","30107","30037","53021","53005","27111","38037","53023","55003","26003","30025",
	"16049","30081","38029","38047","38077","38045","38041","27167","16069","38073","38087",
	"53013","53071","55051","23025","23021","30043","26153","30111","30103","16061","53003",
	"38085","26071","27115","23019","53059","53015","53069","27153","27097","55125","38051",
	"38021","38001","38081","38011","41007","30023","26043","27095","26097","30097","30031",
	"30067","41009","30093","27065","26041","55129","55113","55013","30011","30095","27051",
	"27041","55041","53011","53039","30003","27155","55037","41059","41063","26109","55099",
	"46105","46063","46031","46021","30001","46089","46013","46109","46091","41049","55085",
	"41061","30057","27009","41021","55075","26047","30075","26031","41057","41067","27145",
	"27149","27121","41055","27059","27025","55095","41051","41027","41065","16059","23029",
	"23007","55005","55107","30009","26141","46129","46045","46037","27011","27141","55069",
	"46041","46137","55067","41005","41071","27171","27003","27067","27151","55119","55083",
	"26029","23017","46051","27093","33007","55029","27163","55017","41047","27073","16003",
	"23009","46107","27053","46049","46115","16085","46019","26089","55109","55033","26009",
	"26007","26119","26137","46025","27023","46029","27123","55073","55078","41001","41053",
	"41069","41041","46093","55019","55115","50011","36089","50009","50013","36019","50019",
	"56029","36033","56003","56033","56005","56011","41023","26055","27085","27019","46039",
	"27173","27037","46119","46069","46059","27129","16037","55093","26079","26001","26039",
	"55035","26135","16087","41031","27139","46057","50015","41043","46117","26019","50005",
	"16043","23027","46055","50007","41003","23011","27143","27049","27127","55097","55141",
	"55091","55135","55009","55061","56039","46005","27081","27083","46081","55121","55053",
	"55011","55087","16033","56019","41013","46065","36031","46077","27131","46011","27079",
	"26101","26165","26113","26069","26143","46103","26129","50023","16045","27015","23001",
	"27103","27157","41045","33009","36045","41017","23013","16015","23015","55071","50001",
	"41039","33003","27013","55001","55057","55137","55139","55015","16023","50017","36049",
	"46085","27117","27039","46101","46073","46111","46017","27101","27147","27161","27033",
	"46079","27109","46097","27169","56045","26105","23005","46075","56043","26085","23023",
	"26133","26035","26011","26051","55081","16075","36041","27165","16039","36043","55063",
	"56017","26063","16051","41025","56013","26017","46071","16013","16081","55047","55077",
	"50027","41019","55039","46003","46015","16065","55117","16027","16025","50021","46095",
	"46033","46035","46061","46099","27133","27105","46087","27099","27047","27045","27043",
	"27063","27091","27055","26111","26127","26123","26107","26073","23031","36115","16001",
	"36113","46123","33001","55123","26157","36075","46113","26151","16073","55021","55111",
	"55027","16019","16011","41037","41035","36065","33013","41011","33019","33017","26145",
	"55103","55131","55089","56027","56025","19059","19005","19191","19089","19143","19063",
	"19109","46083","19119","46125","19131","46023","46067","46053","56009","19189","19195",
	"46043","46047","26121","26117","26057","56035","55023","36011","36091","46121","46007",
	"36073","36063","36055","36117","26087","56023","50003","26081","55025","36035","33015",
	"36067","50025","19167","19141","19033","19081","19041","19147","26049","19037","19067",
	"55043","55049","33011","26139","16063","16067","16047","55055","55133","55079","36053",
	"33005","46135","46009","26147","36037","26155","26067","26037","16077","36029","46027",
	"46127","19065","19043","36057","36069","36099","16029","16005","31165","31045","31161",
	"31031","31103","31015","41029","36051","36083","36093","41015","16083","19035","19149",
	"19021","19151","19197","19069","36077","19091","19023","19017","26099","31089","26125",
	"25009","31107","36121","31027","55045","16053","55105","31017","55101","55127","36095",
	"36001","55065","31149","36023","41033","26093","26065","26015","26045","26005","36123",
	"31051","25003","36017","25011","25017","25027","16031","19061","55059","19055","19187",
	"19019","19013","36109","56015","56031","16007","36101","36013","19193","19093","19161",
	"19025","19079","19083","19075","25015","36097","36009","31043","36003","36025","36021",
	"17085","17177","16071","17201","17097","17111","17007","36039","26163","25025","31013",
	"31139","31003","26161","56007","56001","16041","26075","26025","26077","26159","36007",
	"36107","19097","31179","25021","25013","25021","25023","19011","19113","19171","19105",
	"36015","31173","56037","42049","26021","19133","19047","19027","19127","19015","19073",
	"19169","17141","17015","36111","17089","17031","17037","31075","25005","26115","31091",
	"31119","31167","31039","31183","31071","31171","31115","31009","26091","25001","36027",
	"26059","26023","26149","26027","09005","31021","09003","09013","19045","09015","44007",
	"36105","06093","31069","31123","31157","32007","42015","42117","49033","49003","06015",
	"42105","32013","42083","49005","42123","42127","42115","32031","06049","17043","39007",
	"19031","17195","31011","17103","19085","19165","19049","19153","19009","19077","19099",
	"19095","19157","19103","39085","42039","17161","19163","44001","44003","18141","18039",
	"18091","18151","18087","31117","31037","31005","31141","31053","31041","31077","31175",
	"31113","39095","17197","17093","39051","39055","09011","18127","18089","39171","31007",
	"31177","09001","56021","44009","42131","09007","09009","42069","36071","17099","39035",
	"42047","42053","42121","39123","39173","42023","42103","19139","42081","42113","17011",
	"17073","56041","18033","36079","31125","18113","39093","19181","19121","19183","19107",
	"19123","19125","19155","19029","19001","39155","39143","39043","42085","39069","18099",
	"42035","06023","17063","31023","31155","31033","18085","42031","49057","18149","39039",
	"42079","19115","31143","31101","31121","31111","31105","31163","31093","31055","42065",
	"49029","06105","36119","34037","39153","39133","17131","36087","17155","42037","17091",
	"18183","39077","18073","39103","18003","39147","42033","39125","42027","42089","49043",
	"17175","31049","18111","34031","31153","06089","06035","42097","31081","42019","18049",
	"18131","42093","42005","39063","39137","19101","19087","19179","19039","19135","19117",
	"36103","19129","19137","19003","19175","49011","17095","42119","17123","39099","34003",
	"42025","42073","17105","34041","34027","49045","19057","17071","17187","31025","39005",
	"31047","31019","31185","31159","18169","31079","31109","17075","18069","31135","08107",
	"08081","08057","08115","08075","49009","08123","32015","32011","18103","08069","17053",
	"39033","39139","39175","39169","39161","39151","17143","42095","32027","42107","39029",
	"17203","36059","18001","49035","39003","18179","36005","18181","42063","18017","34013",
	"19071","19145","19177","19173","19051","19159","19053","19007","19185","42109","36061",
	"49047","42007","42087","49013","34017","39065","19111","36081","34019","42077","31131",
	"34035","17113","08095","17179","42061","42013","34039","36047","18015","18007","39019",
	"39107","42021","17057","39117","39101","31063","31085","31029","31073","31001","31059",
	"31035","31151","42067","49051","31099","31137","39011","42129","42011","42003","39075",
	"39157","42043","18053","17067","17109","54029","42099","29045","34023","42017","29199",
	"39081","29197","29171","29005","29129","29147","49049","29081","39083","18075","29227",
	"18009","18067","18157","31127","42075","39091","08087","31067","31097","39159","17183",
	"08049","39149","42125","18171","34025","39031","06103","06063","42091","39041","08125",
	"08121","17125","39067","18023","34021","18159","17019","54009","29075","29211","18095",
	"18035","18045","39037","31145","31065","31083","31087","31129","31061","31169","31181",
	"31057","31095","29001","42041","42009","17107","42071","18135","29103","42055","42111",
	"17169","17039","17147","39089","39021","29079","29087","08013","31133","31147","29111",
	"42029","42133","08103","39059","18057","18107","17001","39109","54069","34005","18011",
	"39013","34029","39119","42057","17129","06007","18165","42051","39049","42101","29061",
	"29003","32033","17017","39097","17009","08045","18065","42001","42045","17115","39023",
	"29063","29121","29115","54051","42059","49023","18177","20023","20153","32001","20089",
	"20183","20039","20147","20157","06045","20201","20137","08001","20117","20131","20013",
	"20043","34007","17167","29117","29205","39121","18121","29127","18059","39045","08047",
	"39127","18097","08037","08117","18063","39113","39135","08059","08031","34015","17045",
	"17041","17137","39111","18133","08019","39057","17149","10003","17021","29021","49007",
	"39129","49039","06021","17139","17171","29025","18041","18139","34033","06091","39115",
	"29049","08005","32019","34001","18161","24001","24023","24043","24015","54103","54061",
	"24025","54077","24005","24013","24021","39047","29041","49015","18145","54065","29173",
	"17029","29137","39073","17173","20029","20085","20005","54057","39167","54049","06115",
	"18081","18109","32029","54003","29033","29175","18167","18021","54095","29163","39017",
	"39165","06033","08063","39027","34011","20181","20193","08093","20179","20163","20141",
	"20123","20065","20027","20161","08073","08039","20149","08035","49027","39009","54027",
	"29165","29177","18047","06057","17135","17117","17061","39141","49019","54037","17023",
	"54073","18119","54033","51069","29047","18031","54091","54017","20087","20103","06011",
	"29195","54107","17013","39163","54085","24029","08065","17035","39071","24510","24027",
	"08077","08097","10001","18105","24031","18005","29007","18013","29089","54023","34009",
	"51107","06061","39061","18137","18029","20143","06101","54001","29107","54093","39025",
	"51043","17083","24035","18153","08051","39015","32510","29019","54031","24003","29095",
	"29113","20061","20105","08029","17051","20177","17049","20197","39079","39105","20209",
	"39131","18079","54105","17033","17079","18055","54041","32023","29139","21015","24011",
	"20109","20199","20167","20041","20051","20063","20195","24033","08041","08119","21037",
	"54083","54097","32005","54021","51171","21117","54035","32021","18071","20045","06017",
	"29027","29053","20091","08015","51059","39001","08017","49041","54013","51187","39053",
	"18115","54053","17005","39145","51061","17119","11001","29219","18093","29183","10005",
	"20169","54071","24041","51153","29159","54087","29101","51013","06003","18155","06113",
	"29135","17025","18077","18083","18101","18027","54007","29189","21191","20053","20127",
	"20139","06055","51157","21077","06097","17101","17159","51165","39087","29037","51510",
	"18143","51139","21023","17121","21081","18175","29510","24009","21161","21041","21089",
	"17027","54075","20111","54101","29051","20059","20121","21223","06067","21135","21187",
	"29073","06051","06005","29071","29151","24017","24019","20203","20171","20101","20071",
	"20135","51047","08043","20165","20009","29141","18117","54079","32017","08085","54015",
	"17163","51113","54039","08061","20113","20115","21201","17191","18019","54011","21103",
	"51179","51091","21097","49001","17185","17047","29083","24045","54067","18125","06095",
	"29015","18051","18037","21069","21185","08025","20159","08101","20017","17133","17189",
	"24037","49031","49055","06009","21019","21043","29099","49037","21209","51015","29013",
	"17081","51079","32009","21181","08109","24047","20031","06109","29131","18025","18061",
	"54099","18043","51099","21205","51137","20003","20107","21111","51177","54043","21073",
	"21017","21211","20145","08091","06041","21011","24039","06077","29125","51193","51003",
	"29029","08099","08011","21127","54025","21063","18123","51017","08089","20055","08027",
	"20093","54019","20075","20083","20185","17193","17065","51033","18173","54005","18129",
	"17157","29185","17145","29055","21067","29221","18147","21239","21173","20079","20155",
	"20073","18163","21163","51057","08113","49017","29161","51109","49021","21215","08053",
	"21005","29186","17055","51159","21029","21175","21049","06013","20047","20015","51163",
	"06099","29187","29085","29217","21165","51125","21027","20207","24039","20001","20011",
	"51133","51001","54045","29169","08055","51085","21093","51065","21113","20069","21115",
	"21091","21179","54081","21101","08079","54059","51097","21167","08111","21159","51005",
	"17077","51001","21197","21059","21151","21229","17059","20057","20173","51101","17165",
	"29157","51075","06001","29059","06043","21225","29039","29105","08033","21153","54089",
	"17199","21237","21065","51103","08105","21079","29167","20151","08071","51009","06075",
	"51023","51029","54109","29065","06039","51119","21071","08003","51049","21195","29093",
	"20187","21183","20081","20067","20097","20205","20133","20095","21123","54063","21155",
	"21129","21021","51087","06081","21025","51145","21149","20037","51045","08023","29011",
	"21233","08009","29123","21137","08067","08083","06047","51127","21085","49053","51019",
	"20049","29031","29215","29179","51073","51760","17087","17181","17151","17069","29017",
	"54055","06019","29057","21109","21107","51041","51011","21045","54047","21055","49025",
	"21189","21203","51027","51115","21119","51007","51036","29225","06085","21217","51071",
	"29229","20191","20035","20119","20025","21087","20007","51680","51095","06027","21099",
	"21193","51031","29077","21139","08007","29203","51161","21177","08021","51147","21031",
	"20129","20189","20175","20125","20077","20099","20033","51199","21033","51121","29097",
	"21051","21199","21061","20021","51185","17127","51770","21125","17003","17153","51149",
	"21131","29223","51670","21001","51051","20019","51021","51135","29109","06087","21133",
	"51053","29201","51037","51181","51730","51155","51067","21007","21145","51700","51195",
	"21227","21207","21169","21143","51735","21009","21047","51167","51093","51143","29207",
	"51063","51111","51650","51183","29035","29043","21219","21141","51197","29133","29067",
	"21157","51083","29145","29091","21121","51025","21095","51173","04017","04005","40007",
	"21221","40059","40025","04015","35059","40151","35039","35045","40035","40115","40105",
	"04001","40147","40113","40071","40053","40003","40139","21231","51175","35007","35055",
	"29209","06069","21235","51710","21147","21013","21039","21083","21057","21003","51810",
	"29009","51035","51191","51800","29023","51740","06053","51081","51105","51117","29149",
	"21053","51169","21213","51141","29143","51550","51089","32003","21171","29181","40153",
	"29213","51077","29153","21105","29119","21035","06107","47161","51520","40041","47147",
	"47165","21075","51590","47125","47111","29069","47027","47137","47163","47091","47151",
	"47025","40103","47067","40131","47073","40047","40045","47013","37009","47049","37005",
	"40117","37171","37073","37029","37053","37169","37131","37091","37185","37181","37157",
	"37077","37145","37033","47133","47087","37083","47019","37139","40097","47131","40093",
	"47095","47183","47079","48111","48421","48295","48357","05007","48195","05049","05015",
	"05005","05089","05021","05121","05009","05135","06031","47169","47021","47179","37193",
	"47173","29155","47159","40143","47057","47059","47037","37189","37143","47129","47083",
	"47005","47189","37041","47063","47043","05087","47141","47001","37197","37011","05055",
	"37069","35033","37067","05065","47171","05075","37081","37001","37015","40119","47085",
	"37135","37063","05143","47053","35043","35021","47045","37127","47089","47093","47029",
	"47035","40011","40073","40043","40083","40037","40145","40021","40001","37121","37065",
	"47017","05137","47041","05101","37027","05129","47149","37199","47185","37183","37117",
	"37115","37059","48393","37097","48211","48341","48205","48233","47187","47145","37003",
	"47155","37057","40129","35031","35049","05093","47033","37023","05031","47081","37177",
	"37187","37055","47015","35028","37111","47097","05063","40081","37151","47105","05067",
	"47009","37037","35047","37195","37159","40111","40101","47177","47119","47039","47135",
	"37147","37035","47143","47077","37021","47075","47175","37101","40039","06071","06029",
	"47113","06079","37087","05141","05047","47007","05071","05033","47121","35037","37013",
	"05115","40017","40109","05023","47117","05111","37095","47031","47003","37173","47123",
	"47101","37079","47167","47107","40107","40135","37105","48359","48065","48179","48375",
	"48483","37161","37191","47023","37045","37085","37109","47153","40091","40015","05145",
	"47061","04025","37099","37125","37119","37123","40009","37025","37167","37089","47181",
	"40133","37075","40149","40125","05029","47065","40061","47099","47055","05131","05037",
	"05147","05035","47069","05083","37107","47071","37175","37071","37049","47127","47157",
	"37149","47047","47109","40051","40079","40027","47103","05045","47051","47011","35006",
	"37137","40087","37113","47115","05149","37163","40121","37039","40063","47139","37051",
	"37103","35001","35019","45045","37093","37007","37179","45083","37061","48117","45021",
	"37153","48381","48129","48087","48011","45091","37043","05123","40075","40055","05105",
	"06083","05127","05117","45077","37031","45057","05085","40077","45073","37165","35057",
	"40057","05119","01077","05095","13241","01083","28003","28139","28033","28141","28093",
	"28009","13281","01089","01071","13111","13213","13313","13047","13291","13295","13083",
	"37133","40123","35061","35009","37155","45087","05077","01033","06111","28143","01049",
	"40065","05125","37017","40031","13123","40049","13137","06037","45023","45007","45025",
	"45069","01079","13311","45059","35011","05051","28137","40029","28117","48045","48191",
	"48437","48069","48369","48075","05097","13187","37141","05113","13257","01103","40137",
	"40127","40005","05107","40141","40099","13129","45033","13085","45055","35041","01095",
	"28145","13055","13115","01059","35003","35053","48197","45039","05001","13227","28071",
	"28107","13119","45031","45071","01019","28027","13139","28119","28081","40089","40033",
	"40019","40069","05059","04007","13147","05053","05069","13011","45001","37047","28057",
	"48487","13015","13057","45047","37129","28115","37019","45061","05061","05109","35027",
	"05019","13117","01093","04012","48345","48101","01043","48279","48189","48017","48153",
	"45041","01133","45067","45051","13157","40067","13105","13195","45079","01009","48155",
	"48485","01055","45063","05133","28161","45081","13121","05079","40095","45085","13135",
	"28135","28013","40013","48077","40023","05039","13013","28011","05041","13233","28095",
	"35005","13223","13067","45065","06065","28017","40085","05025","01075","04013","13221",
	"13059","05057","01127","48337","13317","01115","28133","13181","45037","13089","01015",
	"13219","01029","48387","05099","48181","48097","06059","45027","05081","48277","13297",
	"01057","13143","28043","45089","48147","45017","45003","01073","48009","48269","48275",
	"48125","48023","48107","48303","48079","48219","05103","13211","13045","28025","28083",
	"13097","05013","05043","13247","45043","04011","13133","28087","13217","28155","13265",
	"48037","05011","45075","13073","01121","28097","28015","13189","04009","13063","13151",
	"05091","13301","01125","35025","28105","05017","13113","01117","13245","01107","28019",
	"28151","13159","13077","45015","06073","01111","01027","48119","45011","13237","05073",
	"35051","13141","48237","04021","04027","05027","13035","45009","48497","06025","48121",
	"13149","48231","48085","48263","48207","48447","05003","48433","48449","48503","48169",
	"48305","35035","48445","48159","48501","05139","48223","28051","48343","13255","45035",
	"28053","13125","13163","48067","13033","28103","28159","28007","01007","13303","13199",
	"13285","45019","35017","13231","13171","13207","13009","13169","45029","45005","01063",
	"01017","01123","01037","28125","48063","01021","35013","13251","45049","28163","22015",
	"22017","22119","22027","22111","48499","28055","13319","22067","48363","01065","22123",
	"22035","48367","13293","01119","48439","48113","48397","48379","48415","35015","48033",
	"48151","48115","48253","48165","48429","48417","13165","13021","28099","28079","28069",
	"48459","13289","28089","13263","48315","01105","13145","13079","48257","13107","48467",
	"13167","48203","35023","01051","22061","45053","13269","01081","01047","22073","13175",
	"01001","45013","13225","13153","48423","22083","48183","13031","28123","28149","13215",
	"35029","01087","13103","28121","22013","13023","28075","28101","28049","22065","13197",
	"13043","48221","48251","48139","01091","13053","13193","48335","48317","48353","48227",
	"48003","48441","13193","13269","48133","48059","04019","48143","13283","01113","01101",
	"22049","13091","13249","04003","48401","01085","22041","13235","48365","48213","13279",
	"13209","22031","48349","13267","48425","01023","13309","01011","13093","13109","22021",
	"01131","48217","48093","22107","13029","22081","13051","13307","13259","13261","28023",
	"28021","28061","28129","48035","13271","22069","01005","22127","48073","13315","13179",
	"48173","48431","48495","48329","48135","48081","48001","48399","48083","48049","01109",
	"01041","28029","28127","13081","48193","13183","48161","48141","48229","48301","48109",
	"48389","13239","01025","48419","13161","22025","13273","13001","01013","13243","22059",
	"13177","28153","28063","48309","13287","13017","13321","48347","22085","01099","13305",
	"28067","13069","48293","22043","28031","13061","28065","01067","13155","22029","28077",
	"28001","01035","04023","48333","28085","48099","13005","48451","13191","01129","48289",
	"48405","48461","48475","48103","48383","13095","13037","01045","01031","48403","28037",
	"13277","48225","48095","13229","48235","01039","48005","48145","13099","22079","48307",
	"48411","13019","13299","48281","13007","13127","13205","28041","28035","28091","28111",
	"28073","13003","48455","28157","13025","48371","22115","48395","28147","13075","28113",
	"28005","22009","13071","48027","01003","01069","01053","13201","01061","48351","13065",
	"13173","01097","13039","48241","48373","48331","48243","48313","48413","48327","48105",
	"13087","13131","13027","13275","13049","13253","48457","48471","22125","48053","13185",
	"22077","28109","22117","22039","12063","22105","22091","22037","12113","22125","12033",
	"28039","12091","12059","12131","48041","48319","48299","28131","48407","48491","22003",
	"22011","13101","48185","22097","12133","12089","28059","48051","22033","22103","12039",
	"48267","48435","12073","28047","12065","48043","22121","48443","12079","22063","28045",
	"12047","48339","48377","48453","12013","12077","12023","12031","12003","12005","48287",
	"48199","48031","48171","22099","22047","48291","22019","22053","22001","12121","48021",
	"48477","22055","48209","22005","12123","12129","22095","48265","48137","48465","12067",
	"12109","48473","48361","22089","22051","12045","22071","12019","48245","48201","22093",
	"48149","22113","12007","12125","48259","22045","48015","48385","22007","22087","48055",
	"22023","48091","12037","22099","48089","22101","12001","12041","22057","48019","22075",
	"48071","48187","12107","12029","48157","48177","22109","48029","48325","12035","48481",
	"48285","48463","48271","48039","48167","12075","48167","12083","48493","12127","48123",
	"12069","48239","48013","48321","48255","48469","48163","48507","48323","12017","12119",
	"48175","12117","12009","48297","12095","48057","48025","48057","12053","48127","48283",
	"48311","48391","12101","12105","12097","48007","48479","48409","12057","12103","48007",
	"48131","48249","48355","12061","48355","12055","12081","12049","12093","48273","48273",
	"12111","12115","48247","12027","48505","48261","48261","48047","12085","12043","12015",
	"12099","12051","48427","48215","12071","48489","48489","12021","48061","12011","12086",
	"12087","15003","15009","15001","72071","72005","72013","72065","72115","72027","72017",
	"72145","72143","72091","72051","72127","72137","72033","72099","72087","72031","72061",
	"72021","72119","72003","72029","72054","72135","72131","72053","72089","72139","72101",
	"72117","72039","72047","72081","72141","72105","72011","72025","72063","72007","72073",
	"72037","72103","72107","72083","72045","72085","72097","72077","72001","72019","72041",
	"72129","72093","72069","72009","72149","72043","72125","72113","72153","72035","72023",
	"72067","72075","72121","72059","72111","72151","72109","72057","72123","72079","72095",
	"72133","72015","72055"].map(function(d, i) {
		return {
			'county' : d,
			count : Math.round(ReportGrid.math.random() * 100000)
		}
	}).concat(data);

//** VIZ
ReportGrid.geo("#chart", {
	axes : ["location", "count"],
	datapoints : data,
	options : {
		map : [{
			template : "usa-counties",
			property : "county",
			classname : "county",
			label : {
				datapointover : function(dp, stats) {
					return "county #" + dp["county"] + ": " + ReportGrid.format(dp.count);
				}
			},
			color : "#D7191C,#FDAE61,#FFFFBF,#A6D96A,#1A9641"
		}, {
			template : "usa-states",
			property : null,
			classname : "contour"
		}, {
			template : "usa-state-centroids",
			classname : "centroid",
			radius : function(dp, stats) {
				return 30 * dp.count / stats.max;
			},
			color : "i-#fff,#06f",
			label : {
				datapointover : function(dp, stats) {
					return dp["#data"].name + ": " + ReportGrid.format(dp.count);
				}
			}
		}]
	}
});

//** CLASS
big

//** STYLE
.rg .county path
{
	stroke-opacity: 0;
}
.rg .contour path
{
	stroke: #e0e0e0;
	stroke-width: 2px;
}

.rg .centroid
{
	opacity: 0.6;
}