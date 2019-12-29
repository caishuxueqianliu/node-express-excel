function ajaxPost(dbb,da,ip,channelCode,callback){




       var db=[]
 for (let i in dbb) {
    db.push(dbb[i]); 
}



 $.ajax({
    type:"post",
    url:"http://192.168.2.46:3000",
    data:{da,db,ip}, traditional: true,//必须指定为true
    success:function(data){
       callback(data)
    }
})

}
