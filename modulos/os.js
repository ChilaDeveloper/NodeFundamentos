const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
// console.log(os.constants);

const SIZE = 1024;

function kb(byte) { return byte / SIZE}
function mb(byte) { return  kb(byte) / SIZE}
function gb(byte) { return mb(byte) / SIZE}

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

//Total Ram
console.log(gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
// console.log(os.networkInterfaces());




