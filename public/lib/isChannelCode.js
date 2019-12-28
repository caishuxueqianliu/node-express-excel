
function isChannelCode(dbb,channelCode,gameName){


var channelHeader=channelCode.substring(0, 3)


  //大清简体

 if(channelHeader==="131"){
//雪糕归因
dbb.CollectAppId="402881be6be45203016be4bbce410003"
//七陌客服
dbb.SevenMoorAccessId="56b04440-0c54-11ea-abfb-fbcb1010a888"

//tapd
dbb.TapDBAppId=""
dbb.TapDBChannel="ios_dqgj2_jrtt_"+channelCode


}
 //大清繁体
else if(channelHeader==="132"){

//雪糕归因
dbb.CollectAppId="121018f548694c80a1d9c53be80f3603"
//七陌客服
dbb.SevenMoorAccessId="4a5f70d0-409e-11e9-960a-13c56c83dbfd"


//FB
dbb.FBDisplayName=gameName
dbb.FBShareUrl="https://www.facebook.com/%E5%A4%A7%E6%B8%85%E6%8E%9B%E6%A9%9F-101417824542135"
dbb.FBLikeUrl="https://www.facebook.com/%E5%A4%A7%E6%B8%85%E6%8E%9B%E6%A9%9F-101417824542135"
//AppsFlyer



}
  //大明简体
else if(channelHeader==="111"){

//tapd
dbb.TapDBAppId="ceckbjbl8kitsi91"
dbb.TapDBChannel="ios_dmgj2_jrtt_"+channelCode

//雪糕归因
dbb.CollectAppId="402881be6be45203016be4bb81690000"
//七陌客服
dbb.SevenMoorAccessId="c956c9a0-a1ed-11e9-8c9a-cbd9a26be00e"
}
  //神仙简体
else if(channelHeader==="141"){
//雪糕归因
dbb.CollectAppId="402881be6be45203016be4bc85060008"
//七陌客服
dbb.SevenMoorAccessId="c2055820-db44-11e9-9016-610ee4010e0d"


//tapd
dbb.TapDBAppId=""
dbb.TapDBChannel="ios_sxgj2_jrtt_"+channelCode

}
 //神仙繁体
else if(channelHeader==="142"){
//雪糕归因
dbb.CollectAppId="00c6b07239c64dc89aaf23af74ae703a"
//七陌客服
dbb.SevenMoorAccessId="d922c640-d375-11e9-b252-298d84f34ca0"

//FB
dbb.FBDisplayName=gameName
dbb.FBShareUrl=""
dbb.FBLikeUrl=""
//AppsFlyer

}
  //名人简体
else if(channelHeader==="201"){
//雪糕归因
dbb.CollectAppId="bc7453db63d749d583e226f3db8a50e7"
//七陌客服
dbb.SevenMoorAccessId="ee4f7730-0b3c-11ea-b3da-7be6130bc883"


//tapd
dbb.TapDBAppId=""
dbb.TapDBChannel="ios_jlgj2_jrtt_"+channelCode

}
  //精灵简体
else if(channelHeader==="191"){
//雪糕归因
dbb.CollectAppId="e311c125b5444c5284b8cfaa4303ad2a"
//七陌客服
dbb.SevenMoorAccessId="f74268d0-05dc-11ea-8397-79e97272a21d"


//tapd
dbb.TapDBAppId=""
dbb.TapDBChannel="ios_mrgj2_jrtt_"+channelCode

}
 //战国日语
else if(channelHeader==="161"){
//雪糕归因
dbb.CollectAppId="0768b6ddc85d49f69a94b6d075d87616"
//七陌客服
dbb.SevenMoorAccessId="333ba7a0-d7ff-11e8-adcc-1b5c8c564ce7"

//FB
dbb.FBDisplayName=gameName
dbb.FBShareUrl=""
dbb.FBLikeUrl=""
//AppsFlyer
}
 //大韩韩语
else if(channelHeader==="151"){
//雪糕归因
dbb.CollectAppId="183b6e857ceb466a9bbab5541ee95993"
//七陌客服
dbb.SevenMoorAccessId="ebf811b0-dcd8-11e8-825c-f7fa60a498cb"

//FB
dbb.FBDisplayName=gameName
dbb.FBShareUrl=""
dbb.FBLikeUrl=""
//AppsFlyer
}
  //战国二次元简体
else if(channelHeader==="200"){
//雪糕归因
dbb.CollectAppId="964281d824da4d6a9a25b27367ce97a5"
//七陌客服
dbb.SevenMoorAccessId="4077d210-180c-11ea-a1cf-d59871032223"


//tapd
dbb.TapDBAppId=""
dbb.TapDBChannel="ios_mrgj2_jrtt_"+channelCode

}
else {

    

}




}
