const fs = require('fs');
const path = require('path');

const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));

module.exports = {
    priceMenor: productos.sort(function (a, b) {
        if (a.numero < b.numero) {
            return 1;
        }
        if (a.numero > b.numero) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    priceMayor: productos.sort(function (a, b) {
        if (a.numero > b.numero) {
            return 1;
        }
        if (a.numero < b.numero) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    ascendenteTitulo: productos.sort((a, b) => {
        if (a.titulo < b.titulo) {
            return 1;
        }
        if (a.titulo > b.titulo) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    descendenteTitulo: productos.sort(function (a, b) {
        if (a.titulo > b.titulo) {
            return 1;
        }
        if (a.titulo < b.titulo) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    ascendenteMarca: productos.sort((a, b) => {
        if (a.marca < b.marca) {
            return 1;
        }
        if (a.marca > b.marca) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    descendenteMarca: productos.sort(function (a, b) {
        if (a.marca > b.marca) {
            return 1;
        }
        if (a.marca < b.marca) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })

}