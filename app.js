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
app.use("/data/",express.static(path.join(__dirname,'./data/')))

var sheets = xlsx.parse('./data/resourse.xlsx');//获取到所有sheets
var Num = 0;//默认从第二条数据开始，一般第一条数据是标题
app.get('/',(req,res)=>{


 var ip=req.ip.substring(7)

//console.log(req)

	var date= new Date().toLocaleString()
	console.log('访问主页___'+date+"___"+ip)
	res.render('index.html')
	
})
app.get('/download',(req,res)=>{
	res.render('download.html')
	//console.log('下载页面___'+date)
})
app.post('/download',(req,res)=>{

})
app.get('/404',(req,res)=>{
	res.render('404.html')
	//console.log('error页面___'+date)
})

// app.get('/qmkf',(req,res)=>{
// 	fs.readFile("./public/qmkf.json", (err,data)=>{
// 		res.setHeader("Access-Control-Allow-Origin", "*"); 
// 		//console.log(data)
// 		res.json(data.toString())
// 	});
// })
app.get('/da',(req,res)=>{
	fs.readFile("./public/da.json", (err,data)=>{
		res.setHeader("Access-Control-Allow-Origin", "*"); 
		//console.log(data)
		res.json(data.toString())
	});
})
// app.get('/xggy',(req,res)=>{
// 	fs.readFile("./public/xggy.json", (err,data)=>{
// 		res.setHeader("Access-Control-Allow-Origin", "*"); 
// 		//console.log(data)
// 		res.json(data.toString())
// 	});
// })

app.get('/db',(req,res)=>{
	fs.readFile("./public/db.json", (err,data)=>{
		res.setHeader("Access-Control-Allow-Origin", "*"); 
		//console.log(data)
		res.json(data.toString())
	});
})


app.post('/',(req,res)=>{	
 //res.setHeader("Access-Control-Allow-Origin", "*"); 
 var da=req.body.da
 var db=req.body.db
 // var ip=db[194]
 var ip=req.ip.substring(7)
 var code=db[4]
 // var date2=req.body.date2
var date= new Date().toLocaleString()

//console.log(db)
   function readExcel(num){
	var i = num;	
	var data = sheets[0]['data'];

	
	
	if(data.length ==i+1){
		
		console.log('生成成功___'+date+"___"+ip+"  | 渠道号"+code+'生成成功')
		var buffer = xlsx.build(sheets);
		fs.writeFileSync('./data/data.xls',buffer,{'flag':'w'}); 
            return;

	}


     for (var j = 0; j < da.length; j++) {
		     sheets[0]['data'][j][0] =da[j];
		     sheets[0]['data'][j][1] = db[j];
		    } 
               
		    Num++;
		    readExcel(Num);

}

readExcel(Num);



Num=0;







})






app.listen(3000,()=>{
	console.log('sucess...')
})
