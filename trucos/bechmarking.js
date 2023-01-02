let suma = 0;

console.time('todo');

console.time('bucle');

for (let i = 0; i < 1000000; i++) {
    suma += i;
}

console.timeEnd('bucle');

console.time('asincrono');

//Se verifica el timepo en la funcion asincrona

asincrona().then(() =>{
    console.timeEnd('asincrono');
});


let suma1 = 0;

console.time('bucle1');

for (let i = 0; i < 10000000; i++) {
    suma1 += i;
}

console.timeEnd('bucle1');

console.timeEnd('todo');




function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Termina el Prroceso asincrono');
            resolve();
        });
    });
}