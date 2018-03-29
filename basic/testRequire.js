const mod = require("./test");

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", (input) => {
	console.log(`接收到：${input}`);
});


console.log(mod.testVar);

mod.testFn();

