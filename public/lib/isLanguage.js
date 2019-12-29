function isLanguage(dbb,channelCode,appId,gameVision,ipaCode){

var ch=channelCode.substring(0, 3)


if((ch==="131")||(ch==="141")||(ch==="111")||(ch==="201")||(ch==="191")){
dbb.LaunchAdd="http://center-cn.xuegaogame.com/center/config/getconfiginfo"
dbb.CandidateDomain1="http://centercn.xuegaogame.com/center/config/getconfiginfo"
dbb.CandidateDomain2="http://configcn.xuegaogame.com/center/config/getconfiginfo"
dbb.Lang="CN"
dbb.Region="CN"
dbb.PackedStatChannels="201,206"
dbb.SevenMoorLang="ZHCN"
dbb.CurrencyType="CNY"

dbb.TapDBVersion=gameVision
dbb.TapDBPermission="1"
dbb.IAPCode=ipaCode
dbb.InApp_ThirdOpen="1"
dbb.InApp_ProductCode=ipaCode

dbb.LoginMod="0"
dbb.PackedLoginChannels="0"
dbb.PackedWorkChannels="100,102,103"

}



else {
dbb.LaunchAdd="http://center-sea.xuegaogame.com/center/config/getconfiginfo"
dbb.CandidateDomain1="http://centerhk.xuegaogame.com/center/config/getconfiginfo"
dbb.CandidateDomain2="http://confighk.xuegaogame.com/center/config/getconfiginfo"
	dbb.Lang="TW"
	dbb.Region="HMT"
	dbb.PackedStatChannels="204,206"
dbb.SevenMoorLang="EN"
dbb.CurrencyType="USD"



dbb.AppsFlyerAppID_IOS=appId
dbb.AppsFlyerDevKey_IOS="YUwdo3EG5hfdrAnRyw8KRm"

dbb.InApp_ThirdOpen="0"
// dbb.InApp_ProductCode=ipaCode
// dbb.IAPCode=ipaCode
dbb.LoginMod="2"
dbb.PackedLoginChannels="0,2"
dbb.PackedWorkChannels="100"

}

}