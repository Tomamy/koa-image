var sizeOf = require('image-size');

/**
    获取图片大小
    @param filename [string] image path
    return object {width:'',height: '',type:''}
**/
exports.getSize = function(fileName){
    return new Promise(function(resolve,reject){
        sizeOf(fileName,function(error,dimensions){
            if(error) reject(error);
            resolve(dimensions);
        }); 
    }); 
}


