var mongoose    = require('mongoose'),
    Ninja     = new mongoose.Schema({
        id:         Number,
        first_name: String,
        last_name:  String,
        age:        Number,
        height:     Number,
        weight:     Number,
        score:      Number
    });
    
var Ninja = mongoose.model('Ninja', Ninja);
module.exports = Ninja;