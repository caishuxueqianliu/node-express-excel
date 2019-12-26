//声明excel文档操作对象
var xlsx = require('node-xlsx');

// 声明文件操作系统对象 
var fs = require('fs');//加载文件操作模块
var path=require('path');//加载路径处理模块
var sheets = xlsx.parse('./data/resourse.xlsx');//获取到所有sheets
var Num = 1;//默认从第二条数据开始，一般第一条数据是标题

var da={
name:"123",
id:"234"
}
function readExcel(num){
	var i = num;	
	var data = sheets[0]['data'];
	if(data.length ==i){
		console.log("生成成功！");
		var buffer = xlsx.build(sheets);
		fs.writeFileSync('./data/t.xlsx',buffer,{'flag':'w'});   //生成excel
		return ;
	}
	var tmp = data[i][1];//文件名
	
	if(tmp){
		  sheets[0]['data'][0][0] = da.name;
		    sheets[0]['data'][0][1] = da.id;
		    sheets[0]['data'][0][2] = null;
		    Num++;
		    readExcel(Num);

	}
}

//开始调用
readExcel(Num);