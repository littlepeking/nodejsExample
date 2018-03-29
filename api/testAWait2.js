
const fs =require("fs");

var readFile = function (fileName) {
	return function (callback) {
		return fs.readFile(fileName, callback);
	};
};

let gen = function* () {
	let r1 = yield readFile("./api/testAwait.js");
	console.log(r1.toString());
	let r2 = yield readFile("./api/testAwait.js");
	console.log(r2.toString());
};

let g = gen();
let r1 = g.next();
r1.value(function (err, data) {
	if (err) {
		throw err;
	}
	let r2 = g.next(data);
	r2.value(function (err, data) {
		if (err) {
			throw err;
		}
		g.next(data);
	});
});


console.log("aaa");