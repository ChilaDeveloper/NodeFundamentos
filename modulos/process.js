// const p = require('process');



process.on('beforeExit',() => {
    console.log('El Proceso va a terminar');
});

process.on('');

process.on('exit',() => {
    console.log('El Proceso acabo');
    //Aqui ya no se puede conectar por que ya se descoencta
//     setTimeout(() => {
//     console.log('Hola');
// },0);
});

setTimeout(() => {
    console.log('Hola');
},0);

process.on('uncaughtException', (err,origen) => {
    console.error('Vaya se nos olvido capturar un errror');
    // console.error(err);
    setTimeout(() => {
        console.log('Hola Fallo');
    },0);
});

funcionQueNoExiste();
console.log('Esto si el error no se recoje');