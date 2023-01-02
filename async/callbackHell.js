
function hola(nombre, micallbak) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        micallbak(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla Bla Bla Bla Bla');
        callbackHablar();
    }, 1000);
}


function adios(nombre, miOtroCallbak) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        miOtroCallbak();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

// --

console.log('Iniciando Proceso...');

hola("Brayan", function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Proceso Terminado...');
    });
});


// hola("Brayan", function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             adios(nombre, function () {
//                 console.log('Terminando Proceso...');
//             })
//         });
//     });
// });
