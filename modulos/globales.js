// console.log(global);
console.log(setInterval);

let i = 0;
let variable = setInterval(function () {

    console.log("Hola");
    if (i === 3) {
        clearInterval(variable);
    }
    i++;

}, 1000);

console.log(process);

console.log(__dirname);
console.log(__filename);

//Mejor evitar ausar variables globaes como este ejemplo

globalThis.miVariable = 'elValor';

console.log(miVariable);
