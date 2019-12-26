//npm install exceljs
var express=require('express')
var app=express()
var path=require('path')

app.engine('html', require('express-art-template'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const xlsx = require('node-xlsx')
const fs = require('fs')

app.use("/public/",express.static(path.join(__dirname,'./public/')))
app.use("/node_modules/",express.static(path.join(__dirname,'./node_modules/')))

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






app.listen(3000,()=>{
	console.log('sucess...')
})
