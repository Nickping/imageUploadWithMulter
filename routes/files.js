var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./public/images');
    },
    filename : function(req,file,cb){
        console.log('multer');
        console.log(file);
        cb(null,file.originalname);
    }
});
var uploads = multer({storage: storage});


router.post('/upload',uploads.single('avatar'),function(req,res,next){
    console.log(req.file);
    console.log(req.body);
    res.status(201).end();
});


module.exports = router;
