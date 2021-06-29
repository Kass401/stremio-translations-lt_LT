// No automatic generation: we don't want to depend on fs, as we want to keep this universal
// ls *-*.json | while read line; do printf "\"`printf $line | cut -d '.' -f1`\": require(\"./$line\"),\n"; done
module.exports = function() {
	return {
		"ar-AR": require("./ar-AR.json"),
		"bg-BG": require("./bg-BG.json"),
		"ca-CA": require("./ca-CA.json"),
		"da-DK": require("./da-DK.json"),
		"de-DE": require("./de-DE.json"),
		"el-GR": require("./el-GR.json"),
		"en-US": require("./en-US.json"),
		"es-ES": require("./es-ES.json"),
		"fr-FR": require("./fr-FR.json"),
		"he-IL": require("./he-IL.json"),
		"hr-HR": require("./hr-HR.json"),
		"hu-HU": require("./hu-HU.json"),
		"it-IT": require("./it-IT.json"),
		"mk-MK": require("./mk-MK.json"),
		"my-BM": require("./my-BM.json"),
		"nb-NO": require("./nb-NO.json"),
		"nl-NL": require("./nl-NL.json"),
		"nn-NO": require("./nn-NO.json"),
		"pl-PL": require("./pl-PL.json"),
		"pt-BR": require("./pt-BR.json"),
		"pt-PT": require("./pt-PT.json"),
		"ru-RU": require("./ru-RU.json"),
		"se-SE": require("./se-SE.json"),
		"sr-RS": require("./sr-RS.json"),
		"tr-TR": require("./tr-TR.json"),
		"zh-CN": require("./zh-CN.json")
	}
};

// ls *-*.json | while read line; do printf "\"`printf $line | cut -d '.' -f1`\",\n"; done
module.exports.all = [
	"ar-AR",
	"bg-BG",
	"ca-CA",
	"da-DK",
	"de-DE",
	"el-GR",
	"en-US",
	"es-ES",
	"fr-FR",
	"he-IL",
	"hr-HR",
	"hu-HU",
	"it-IT",
	"mk-MK",
	"my-BM",
	"nb-NO",
	"nl-NL",
	"nn-NO",
	"pl-PL",
	"pt-BR",
	"pt-PT",
	"ru-RU",
	"se-SE",
	"sr-RS",
	"tr-TR",
	"zh-CN"
];
