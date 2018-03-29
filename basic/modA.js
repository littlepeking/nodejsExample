module.exports.test="A";

const modB =require("./modB");
console.log("modB:",modB.test);
module.exports.test="AA";

