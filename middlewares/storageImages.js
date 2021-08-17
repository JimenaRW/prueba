const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, '../public/images/products');
    },
    filename : (req, file, cb) => {
        cb(null, fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        req.fileValidationError = "Solo se permiten imágenes";
        return cb(null, false, req.fileValidationError)
    }
    cb(null, true)
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = upload