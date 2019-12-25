//声明excel文档操作对象
var xlsx = require('node-xlsx');
var sheets = xlsx.parse('./data/wdcb.xlsx');//获取到所有sheets
// 声明文件操作系统对象 
var fs = require('fs');//加载文件操作模块
var path=require('path');//加载路径处理模块
String.prototype.trim=function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
var Num = 1;//默认从第二条数据开始，一般第一条数据是标题

/**
 * 读取excel某一条数据，传参调用html创建方法
 * @param  {[type]} num 第几条数据
 * @return {[type]}     [description]
 */
function readExcel(num){
	var i = num;	
	var data = sheets[0]['data'];
	if(data.length ==i){
		console.log("生成成功！");
		//fs.writeFile('./data/target.xlsx',sheets,function(error){});
		var buffer = xlsx.build(sheets);
		fs.writeFileSync('./data/target.xlsx',buffer,{'flag':'w'});   //生成excel
		return ;
	}
	var tmp = data[i][1];//文件名
	var tar = './build/' + tmp + '.shtml';//生成目标路径
	var link = data[i][4];//下载链接
	var copyRight = data[i][5];
	if(tmp){
		createHtml(tar,link,copyRight,num);
	}
}
/**
 * 根据参数创建html文件
 * @param  {[String]} tar     生成目标文件路径
 * @param  {[String]} repLink 下载链接
 * @param  {[String]} copy    版权名称
 * @param  {[num]} num     第几条数据
 * @return {[type]}         
 */
function createHtml(tar,repLink,copy,num){
	fs.readFile('./index.shtml','utf8',function(err,files){//读取模板文件
		var result = files.replace(/#{4}/g, repLink);//替换链接
		result = result.replace(/xxxxxx/g, copy);//替换底部版权
		fs.writeFile(tar, result, 'utf8', function (err) {
		    if (err) {
				fs.writeFile('./err-log.txt',err,function(error){});//生成错误，则写入日志
				return console.log(err)
		    }
		    //修改已读取excel数据，为存储对照excel准备
		    // sheets[0]['data'][Num][6] = 'http://www.xxxxxxx.com/events/wdcb/201811/load/' + tar.replace("\.\/","");
		    sheets[0]['data'][0][0] = 1;
		     sheets[0]['data'][0][1] = '2';
		      sheets[0]['data'][0][2] = '3';
		    Num++;
		    readExcel(Num);
		});
	}
	) 
}
//开始调用
readExcel(Num);