//npm install exceljs
var express=require('express')
var app=express()
var path=require('path')

const xlsx = require('node-xlsx')
const fs = require('fs')

if(typeof require !== 'undefined') XLSX = require('xlsx');
app.use("/public/",express.static(path.join(__dirname,'./public/')))
app.use("/node_modules/",express.static(path.join(__dirname,'./node_modules/')))

// fs.readFile("config.xlsx", (err,data)=>{


// console.log(data)
// });
app.get('/', function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
 res.json((xlsx.parse("config.xlsx")))
  })

// console.log( xlsx.parse("config.xlsx"))
// console.log( xlsx.readFile("config.xlsx").data[0].lauchAdd)
// var config=xlsx.parse("config.xlsx")
// var a=(config)[0].data[0]

// console.log(a[0])

var workbook = XLSX.readFile('config.xlsx',{ cellStyles: true });
var sheetNames = workbook.SheetNames; 
console.log(sheetNames)
var worksheet = workbook.Sheets["出包参数"];
// console.log(worksheet)
Worksheet.Delete(worksheet)
console.log(typeof(worksheet))
var desired_cell = worksheet["A1"];
 var desired_value = desired_cell.v;
 console.log(desired_value)
desired_value="women"
console.log(desired_value)



// var buffer = xlsx.build([{name: "出包参数", data:arr}]); 
//             fs.writeFile('./result/config.xlsx',buffer,function(){
fs.writeFileSync('./result/config.xlsx',workbook,(err,files)=>{


       console.log(XLSX.readFile('./result/config.xlsx',{ cellStyles: true }))

 }
 );

// var data =xlsx.utils.sheet_to_json(sheet); //通过工具将表对象的数据读出来并转成json

app.listen(3000,()=>{
	console.log('sucess...')
})
