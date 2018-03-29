const {StringDecoder} =require("string_decoder");
const decoder = new StringDecoder("utf8");
const buf11 = Buffer.from("中文字符串！！！！！");

for(let i=0;i<buf11.length;i+=5){
	const b =Buffer.allocUnsafe(5);
	buf11.copy(b,0,i);
	console.log(decoder.write( b));
}