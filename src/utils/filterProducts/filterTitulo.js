const path = require('path');
const fs = require('fs');

const n = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/products.json'), 'utf-8'));

module.exports = {
    ascendenteTitulo : n.sort(function (a, b) {
        if (a.titulo < b.titulo) {
            return 1;
        }
        if (a.titulo > b.titulo) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    descendenteTitulo : n.sort(function (a, b) {
        if (a.titulo > b.titulo) {
            return 1;
        }
        if (a.titulo < b.titulo) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })
}
