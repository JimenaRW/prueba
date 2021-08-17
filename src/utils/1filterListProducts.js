const { ascendenteMarca, descendenteMarca } = require('./filterProducts/filterMarca');
const { priceMenor, priceMayor } = require('./filterProducts/filterPrice');
const { ascendenteTitulo, descendenteTitulo } = require('./filterProducts/filterTitulo');

module.exports = {
    priceMenor,
    priceMayor,
    ascenTitulo : ascendenteTitulo,
    descenTitulo : descendenteTitulo,
    ascenMarca : ascendenteMarca,
    descenMarca : descendenteMarca

}