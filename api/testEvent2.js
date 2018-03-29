const EventEmitter = require("events");

class CustomEvent extends EventEmitter{}

const ce =new CustomEvent();

ce.on("error", (err,dat) =>{
	console.log(err,dat);
}); 



ce.emit("error" , new Error("test param"),Date.now());