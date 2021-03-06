//npm install exceljs
var express=require('express')
var app=express()
var path=require('path')

var formidable = require('./node_modules/formidable');

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

app.post('/image',(req,res)=>{


 let form = new formidable.IncomingForm();
    form.uploadDir = "./uploads";
    form.on('field',(field,value)=>{
     // console.log(field);
        //console.log(value);
    });
    form.on('file',(name,file)=>{
       // console.log(name);
       // console.log(file);
    });
    form.on('end',()=>{
        res.end('upload complete');
    })
    form.parse(req,(err,fields,files)=>{
        //重命名
        console.log(req)
var obj=[]
       for (var i in files ){
                obj.push(files[i])

        }
        console.log(obj.length)
for (var i = 1; i <= obj.length+1; i++) {
        

	 let extname = path.extname(files.file.name);
        let oldpath=__dirname+'/'+files.file.path
        let newpath = __dirname + '/uploads/' +i+ extname;
        fs.rename(oldpath, newpath,()=>{

        });
}
	

//let ran =parseInt((Math.random()*10+1))

        // let extname = path.extname(files.file.name);
        // let oldpath=__dirname+'/'+files.file.path
        // let newpath = __dirname + '/uploads/' +ran+ extname;
        // fs.rename(oldpath, newpath,function(err){
        //     if(err){
        //         throw Error("改名失败");
        //     }
        // });



//         var keys = Object.keys(obj);
// console.log('长度', keys.length);
// keys.forEach(function(key, index) {
//   console.log('当前是第', index + 1, '个, key是', key, ', value是', obj[key]);
// });




        

       

          
    });


res.send('2')
})



app.get('/',(req,res)=>{


 var ip=req.ip.substring(7)

//console.log(req)

	var date= new Date().toLocaleString()
	console.log('访问主页___'+date+"___"+ip)
	res.render('image.html')
	
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

const compressing = require('compressing');
compressing.zip.compressDir('./data/16117', './data/16117.zip')
.then(() => {
    console.log('success');
})
.catch(err => {
    console.error(err);
});

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


app.get('/zip',(req,res)=>{

compressing.zip.compressDir('data/16117', 'data/16117.zip')
.then(() => {
    console.log('success');
})
.catch(err => {
    console.error(err);
});



})
app.listen(3000,()=>{
	console.log('sucess...')
})
