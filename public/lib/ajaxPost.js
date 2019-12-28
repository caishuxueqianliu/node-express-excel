function ajaxPost(dbb,da,channelCode,callback){




       var db=[]
 for (let i in dbb) {
    db.push(dbb[i]); 
}


// console.log(db)
 $.ajax({
    type:"post",
    url:"http://192.168.0.104:3000",
    data:{da,db}, traditional: true,//必须指定为true
    success:function(data){
       callback(data)
    }
})

}
