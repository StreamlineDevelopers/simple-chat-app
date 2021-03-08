const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        console.log(req)
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
});

const fileFilter = (req, file, callBack) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        callBack(null, true)
    }else{
        callBack(null, false)
    }
}

const upload = multer({storage: storage, fileFilter : fileFilter});

module.exports = {upload}