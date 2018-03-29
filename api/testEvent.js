const EventEmitter = require("events");

class CustomEvent extends EventEmitter{

}

const ce =new CustomEvent();
ce.on("test",()=>{
	console.log("this is a test!");
});

function fn1(){
	console.log("this is fn1!");
}

function fn2(){
	console.log("this is fn2!");
}

ce.on("test",fn1);
ce.on("test",fn2);

//ce.once('test',()=>{
//    console.log('this is a test!');
//});

setInterval(()=>{ce.emit("test");},500);


setTimeout(()=>{ce.removeListener("test",fn2);},2000);