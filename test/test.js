var koaImage = require("../");
var co = require("co");
var gen = function *(){
    var dimensions = yield koaImage.getSize("node.jpg");
    console.log(dimensions);
}
co(gen);
