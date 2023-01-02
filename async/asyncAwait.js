
async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla Bla Bla Bla Bla');
            // resolve(nombre);
            resolve('Error Error');
        }, 1000);
    });
}


async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    });
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        // hablar(function () {
            console.log("Hola que pedo");
            conversacion(nombre, --veces, callback);
        // });
    } else {
       return new Promise((resolve,reject) => {
        console.log("aaaa");
        resolve();
       });
    }
}

// --



async function main(){
    nombre = await hola("Brayan");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}
main();
console.log('Iniciando Proceso...');
conversacion("Brayan",3, (x) =>{console.log('que Pedo')});
console.log("Termina El Proceso");


// 

    // hola('Brayan')
    //     .then(hablar)
    //     .then(hablar)
    //     .then(adios)
    //     .then((nombre) => {
    //         console.log('Terminado el Proceso...');
    //     }).catch(error => {
    //         console.error('Ha habido un error: ');
    //         console.error(error);
    //     });
