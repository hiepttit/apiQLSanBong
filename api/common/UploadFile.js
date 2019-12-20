let multer  = require('multer');
let diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/images");
    },
    filename: (req, file, callback) => {
        let math = ["image/png", "image/jpeg"];
        if (math.indexOf(file.mimetype) === -1) {
            let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
            return callback(errorMess, null);
        }
        let fileType= file.originalname.split(".")[1];
        let filename = `${Date.now()}-outTeam.${fileType}`;
        callback(null, filename);
    }
});
let uploadFile = multer({storage: diskStorage}).single("fileUpload");
module.exports =  uploadFile;