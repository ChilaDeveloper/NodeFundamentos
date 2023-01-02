const { callbackify } = require("util");

function asincrona(callback){
    setTimeout(function () {

        try{

            let a = 3 + z;
            callback(null,a);

        } catch (e){
            callback(e);
        }

    },1000);
}

//Cuando es asincrona el error no lo reconoce en el hilo0 principoapl, osea try catch  fuera de la sincronia no se podria leer

asincrona((err,dato) => {
    if(err){
        console.error('Tenemos un Error');
        console.error(err);
        // throw err;
        return false
    }else{
        console.log('Todo se ejecuto normalmente, mi dato es:' + dato);
    }
});
