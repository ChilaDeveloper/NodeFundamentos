console.error('Algo');
console.warn('Algo');

var tabla = [
    {
        a: 1,
        b: "Hola"
    },
    {
        a:2,
        b:"Hola"
    }

];
console.table(tabla);


console.log('Conversacion: ');
console.group('Conversacion');
console.log('Hola');
console.log('Blabla');
console.log('Adios');
console.groupEnd('Conversacion');

console.log('Otra Cosa');

function function1(){
    console.group('funcion 1');
    console.log('Funcion 1');
    console.log('Funcion 1');
    function2();
    console.log('Funcion 1');
    console.groupEnd('funcion 1');
}

function function2(){
    console.group('funcion 2');
    console.log('Funcion 2');
    console.log('Funcion 2');
    console.groupEnd('funcion 2');    
}

function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');