var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;
var userSchema = new Schema({
    ID : {type:String, required:true},
    passwd : {type:String, default : ''}
});

module.exports = mongoose.model('user',userSchema);

