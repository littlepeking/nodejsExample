const {normalize,join,resolve} = require("path");
const {basename,dirname,extname} = require("path");
const {parse,format} = require("path");
const {sep,delimiter,win32,posix} = require("path");


console.log(normalize("/usr//local/bin"));
console.log(normalize("/usr//local/../bin"));


console.log(join("/usr//local/../bin","../aaa","/gg//s"));
console.log(resolve("./"));

filePath="/use/ext//node_module/aa.txt";
console.log(basename(filePath));
console.log(dirname(filePath));
const fileObj=parse(filePath);
console.log(fileObj);
console.log(format(fileObj));

console.log("path:",process.env.path);
console.log("sep:",sep);
console.log("posix sep:",posix.sep);
console.log("delimiter:",delimiter);
console.log("posix delimiter:",posix.delimiter);

console.log("__dir  ",__dirname);

//下面两个是node.EXE的路径
console.log("__cwd  ",process.cwd());
console.log("./     ",resolve("./")); //特别的，require 里的./代表相对当前文件的路径，而非node.exe！！