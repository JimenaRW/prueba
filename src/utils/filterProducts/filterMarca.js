const fs = require('fs');
const path = require('path');

const n = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/products.json'), 'utf-8'));

module.exports = {
    ascendenteMarca: n.sort(function (a, b) {
        if (a.marca < b.marca) {
            return 1;
        }
        if (a.marca > b.marca) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }),
    descendenteMarca: n.sort((a, b) => {
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