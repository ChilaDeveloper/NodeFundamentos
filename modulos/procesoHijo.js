// const { exec } = require('child_process');

// exec('dir', (err,stdout, sterr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

const { exec, spawn } = require('child_process');

let proceso = spawn('cmd.exe', ['/c','dir']);

console.log(proceso.pid);

proceso.stdout.on('data', function (dato) {
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function () {
    console.log('El proceso termino');
    console.log(proceso.killed);
});