var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/hello', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/bye',(req,res)=>{

    console.log(req.body.STRING);
    res.send('bye~~');
});


router.post('/helloWorld', (req, res) => {
    var str = req.headers.authorization;
    console.log(str);
    var result = str + ' received';
    res.status(201).json(result);
});
router.post('/signup', (req, res) => {

    console.log(req.body.ID);
    console.log(req.body.passwd);
    var newUser = new User({
        ID: req.body.ID,
        passwd: req.body.passwd
    });

    newUser.save(function (err, user) {
        if (err) {
            console.log(err);
            res.status(500).end();
        }
        else if (user == null) {
            console.log('user null');
            res.status(500).end();
        }
        else {
            console.log('success');
            res.status(201).json(user);
        }
    });


});
router.get('/allUser',(req,res)=>{

    User.find({},(err, users)=>{
        if(err)
            res.status(501).end();
        res.status(201).json(users);
    });
});
router.get('/allUser',(req,res)=>{
    User.find({},(err,users)=>{
        if(err)
            res.status(403).end();
        else
            res.status(201).json(users);
    });
});

router.post('/login', (req, res) => {

    User.findOne({ID:req.body.ID},(err,user)=>{
        if(err){
            console.log(err);
            throw err;
            res.status(404).send('wrong ID');
        }else{
            if(user.passwd == req.body.passwd)
            {
                res.status(201).json(user);
            }else
                res.status(201).send('wrong passwd');
        }
    });
});
router.delete('/deleteUser/:id', (req, res)=>{

    User.remove({_id : req.params.id},(err, output)=>{
        if(err)
            res.status(403).end();
        else
            res.status(201).send('success');
    });
});

module.exports = router;
