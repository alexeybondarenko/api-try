var mongoose = require('mongoose');

var appSchema = new mongoose.Schema({
  title: String,
  description: String
//    comments: [{
//        body: String,
//        date: Date
//    }],
//    date: {
//        type: Date,
//        default: Date.now
//    },
//    hidden: Boolean,
//    meta: {
//        votes: Number,
//        favs: Number
//    }
});

var App = mongoose.model('App', appSchema);

module.exports = App;
