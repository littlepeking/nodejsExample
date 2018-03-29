module.exports.test="B";

const modA = require("./modA");

console.log("modA:",modA.test);

module.exports.test="BB";