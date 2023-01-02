const fs = require('fs');

function leer(ruta,cb) {
    fs.readFile(ruta,(err,data) => {
        //Leido
        cb(data.toString());
    })
}

function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido,function(err) {
        if(err){
            console.log('No he podido escribirlo',err);
        } else {
            console.log('Se ha escrito correctamenrte');
        }
    });
}

function borrar(ruta,cb){
    fs.unlink(ruta,(err) => {
        if(err){
            console.log('No he podido borrar',err);
        } else {
            console.log('Se ha borrado correctamenrte');
        }
    });
}

// escribir(__dirname+'/archivo1.txt','Soy un archivo nuevo',console.log);
// leer(__dirname + '/archivo1.txt',console.log);
borrar(__dirname + '/archivo1.txt',console.log);
