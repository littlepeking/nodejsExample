console.log( Buffer.alloc(20));
console.log( Buffer.alloc(5,1));

console.log( Buffer.allocUnsafe(5));
console.log(Buffer.from([1,2,3]));

console.log(Buffer.from("test"));

console.log(Buffer.from("test","base64"));

console.log(Buffer.byteLength("test"));
console.log(Buffer.byteLength("测试"));


console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1,2,3])));


const buffer1 =Buffer.from([1,2,3]);
const buffer2 =Buffer.from("aaa");
const buffer3 =Buffer.from("bbb");
const buffer4 =Buffer.from("ccc");

console.log(Buffer.concat([buffer1,buffer2,buffer3,buffer4]).toString());


console.log(buffer1);


console.log(buffer1.toString());


console.log(buffer1.length);

console.log(buffer2.toString("base64"));

console.log(buffer2.toString("UTF-8"));

const buf5= Buffer.allocUnsafe(10);
console.log(buf5.fill(10,2,6));
console.log(buf5);

const buf6= Buffer.from("test");

const buf7= Buffer.from("test");
console.log(buf6.equals(buf7));

const buf8= buffer3.copy();

console.log(buf8);

console.log(buf6.indexOf("s"));
console.log(buf6.indexOf("s"));




