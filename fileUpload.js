var express  =  require('express');
var router = express.Router();
var multer = require('multer');
var ImageModel = require('./api/images/image.model').ImageModel;


function addImage(data,res) {
    ImageModel.create(data, function(err , image){
        if(err)
        {
            res.json({ status: "error", "image": "" });
        }
        else
        {
            res.json({ status: "success", "image": image });
        }
    });
}

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
            const entityId = req.query.entityId;
            if(entityId){
                addImage({entityId:entityId, path: `/uploads/${req.file.filename}`},res);
            }
            else{
                res.status(200).json({status:'success', path: `/uploads/${req.file.filename}`});
            }
        }
    })
});

module.exports = router;  