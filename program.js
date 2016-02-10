/**失败的http代码

var http = require('http');

// 用数组存储传进来的url
var url = [];
url[0] = process.argv[2];
url[1] = process.argv[3];
url[2] = process.argv[4];


function getUrl(url){
	var result = '';
	http.get(url,function(res){
		res.on('data',function(data){
			result = data;
		})
		res.on('end',function(data){
			console.log(result.toString());
		})
	})
	return result;
}
var result = [];
var i=0;
while(i<3){
	result[i] = getUrl(url[i]);
	// console.log(result[i]);
	i++;
}
// console.log(result);
**/


var port = process.argv[2];
var net = require('net');
var server = net.createServer(function(socket){
	//每次链接进来调用的函数
	console.log('新链接进入'+new Date());
	var currentTime = new Date();
	var backData = currentTime.getFullYear()+'-0'+(currentTime.getMonth()+1)+'-'+currentTime.getDate()+' 0'+currentTime.getHours()+':0'+currentTime.getMinutes();
	socket.end(backData+'\n');
})
if(server.listen(port)){
	console.log('成功监听端口'+port);
}else{
	console.log('监听失败');
}


/**
 * HTTP文件服务器
 */






















