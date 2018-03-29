const fs = require('fs');
const {promisify} = require('util');

const read = promisify(fs.readFile);


async function test(){

try{

  const a = await read("./api/asyncAwait.js");

    console.log(a.toString());

    }catch(e){

    console.log(e);
    }
}

test();

console.log("starting...")