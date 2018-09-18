var express  =  require('express');
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname + '-eman.jpg');
    }
});
const upload = multer({ storage: storage }).single('file');

router.post('/upload', function(req,res){
    upload(req,res, function(err){
        if(err){
            res.status(501).json({err: err});
        }
        else{
            res.status(200).json({status:'success', path: `/upload/${req.file.filename}`});
        }
    })
});