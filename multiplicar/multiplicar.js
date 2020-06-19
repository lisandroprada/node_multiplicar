// requires
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log(base, limite);
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} o ${limite} no es un número`);
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);
        }

        resolve(data);
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log(base, limite);
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}