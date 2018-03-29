const fs =require("fs");


fs.writeFile("test","this is a test22",{encoding:"utf8"},(err)=>{

	if(err) throw err;
    
	console.log("finished written file!");
});

fs.stat("./api/testFs2.js",(err,stats)=>{
    
	if(err) throw err;

	console.log(stats.isDirectory());
	console.log(stats.isFile());
	console.log(stats);

});

//file delete
fs.unlink("./test",err=>{

	if(err) throw err;

	console.log("file deleted");
});


fs.mkdir("test1",err=>{

	if(err) throw err;

	console.log("dir created");
});

fs.rmdir("./test1",err=>{

	if(err) throw err;

	console.log("dir deleted");
});


fs.watch("./",{
	recursive:true
}, (eventType,filename)=>{
	console.log(eventType,filename);
});