// function soyAsincrona(micallbak) {
//     setTimeout(function () {
//         console.log('Estoy siendo asincrona');
//         micallbak();
//     }, 1000);
// }

// console.log('Iniciando Proceso...');
// soyAsincrona(function(){
//     console.log('Terminando Proceso...'); 
// });


function hola(nombre, micallbak) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        micallbak(nombre);
    }, 1000);
}


function adios(nombre, miOtroCallbak) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        miOtroCallbak();
    }, 1000);
}

console.log('Iniciando Proceso...');
hola("Brayan", function (nombre) {
    adios(nombre, function () {
        console.log('Terminando Proceso...');
    })
});
