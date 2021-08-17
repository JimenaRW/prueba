const path = require('path');
const fs = require('fs');

// const { ascendenteMarca, descendenteMarca } = require('../utils/filterProducts/filterMarca'); // solo interpreta la ultima función (desc)
// const { ascendenteMarca, descendenteMarca, priceMayor } = require('../utils/filterListProducts'); // solo interpreta la ultima función (desc Marca)

// const { ascenMarca, ascenTitulo, descenTitulo, priceMayor, priceMenor } = require('../utils/1filterListProducts'); 
// solo toma la ultima funcion de los 3 archivos requeridos filters (desc y mayor), los 3 repiten las lineas de codigo de json, path y fs

// const { ascenMarca, descenMarca, priceMenor } = require('../utils/2filterListProducts'); 
// funciona pero repito en cada archivo requiero fs,path, el parseado de json

let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));

module.exports = {
    index : (req,res) => { 
        return res.send()
    }
}