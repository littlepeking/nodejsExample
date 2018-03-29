const fs =require("fs");
const {join} = require("path"); 

fs.readFile(join( __dirname, "testFs.js"),"utf8",(err,data)=>{

	if(err) throw err;

	console.log(data.toString());

});


data1 =  fs.readFileSync(join( __dirname, "testFs.js"),"utf8");

console.log(data1.toString());

fs.writeFile("./test","this is a test22",{encoding:"utf8"},(err)=>{

	if(err) throw err;

	console.log("finished written file!");
});