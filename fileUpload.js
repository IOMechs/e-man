var express  =  require('express');
var router = express.Router();
var multer = require('multer');

const store = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, 'eman-' +file.originalname);
    }
});
var upload = multer({ storage: store }).single('file');

router.post('/upload', function(req,res){
    upload(req,res, function(err){
        if(err){
            res.status(501).json({status:'error',err: err});
        }
        else{
            res.status(200).json({status:'success', path: `/uploads/${req.file.filename}`});
        }
    })
});

module.exports = router;  