
const util = require('util')
const mysql = require('mysql')
var db = require('../Dbconnection');
const uploadfile = require ('../common/UploadFile');
module.exports = {
    uploadFile: async(req,res)=> {
        uploadfile(req,res,function(err,result) {
            if(err) {
                return res.end("Error uploading file.");
            }
            res.end("File is uploaded: "+req.file.filename);
        });
    }
};