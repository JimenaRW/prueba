const fs = require('fs');
const path = require('path');

const n = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/products.json'), 'utf-8'));


module.exports = {
    
    priceMenor: n.sort(function (a, b) {
        if (a.numero > b.numero) {
            return 1;
        }
        if (a.numero < b.numero) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    priceMayor: n.sort((a, b) => {
        if (a.numero < b.numero) {
            return 1;
        }
        if (a.numero > b.numero) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })
}