// 要链接的url
var url = "ws://127.0.0.1:5665/";

// 建立socket
var socket = new WebSocket(url);

// 连接成功
socket.onopen = function(){
	console.log('web socket 连接成功');
}