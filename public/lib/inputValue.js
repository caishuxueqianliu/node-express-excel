

function
 inputValue (dbb,channelCode,gameName,bundleID,ipaCode,platForm,MD5,gameVision) {
//console.log(bundleID)

// var dbb=this.$store.state.db
// console.log(dbb)


dbb.ChannelCode=channelCode
dbb.GameName=gameName
dbb.BundleID=bundleID
// dbb.IAPCode=ipaCode
dbb.Platform=platForm
dbb.Identifier=MD5
dbb.GameVersion=gameVision

dbb.CollectChannel="ios_jrtt_"+channelCode
// console.log(dbb)

}	
