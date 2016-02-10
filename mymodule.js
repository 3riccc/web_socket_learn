// 他所需要的模块，自己去引入，这样管理更方便
var path = require('path');
exports.checkSuffix = function(suffix,list){
	var foundArr = [];
	for(var index in list){
		if(path.extname(list[index]) == suffix){
			foundArr.push(list[index]);
		}
	}
	return foundArr;
}