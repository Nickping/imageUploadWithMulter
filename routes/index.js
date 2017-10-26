var express = require('express');
var router = express.Router();

function fcmMessageSending(pushMessage) {

    fcm.send(pushMessage, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
}

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
