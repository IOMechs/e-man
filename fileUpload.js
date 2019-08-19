var express = require("express");
var router = express.Router();
var multer = require("multer");
var ImageModel = require("./api/images/image.model").ImageModel;
var path = require("path");

function addImage(data, res) {
  ImageModel.create(data, function(err, image) {
    if (err) {
      res.json({ status: "error", image: "" });
    } else {
      res.json({ status: "success", image: image });
    }
  });
}

function makeRandomString() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const store = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/uploads/");
  },
  filename: (req, file, callback) => {
    const tag = req.query.entityId ? makeRandomString() : "logo";
    const id =
      req.query.entityId || req.query.id
        ? req.query.entityId
          ? req.query.entityId
          : req.query.id
        : makeRandomString();
    callback(null, id + "-" + tag + path.extname(file.originalname));
  }
});
var upload = multer({ storage: store }).single("file");

router.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    console.log("in upload function");
    if (err) {
      console.log("in upload err");
      res.status(501).json({ status: "error", err: err });
    } else {
      console.log("in upload, success function");
      const entityId = req.query.entityId;
      if (entityId) {
        addImage(
          { entityId: entityId, path: `/uploads/${req.file.filename}` },
          res
        );
      } else {
        console.log(req.query.id);
        console.log(req.file.filename);
        res
          .status(200)
          .json({ status: "success", path: `/uploads/${req.file.filename}` });
      }
    }
  });
});

module.exports = router;
