

    
setImmediate(() => {
	console.log("setImmediate");
}, 0);
        

setTimeout(() => {
	console.log("setTimeout");
}, 0);

for(let i=0 ;i<1000;i++){
    
	console.log(".");
}

//console.debug("NodeJS Finish init");