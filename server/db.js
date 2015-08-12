var mongoose = require('mongoose'),
    CONFIG = require('./config');

mongoose.connect('mongodb://' + CONFIG.database.username + ":" + CONFIG.database.password  + "@" + CONFIG.database.host + ':' + CONFIG.database.port + '/' + CONFIG.database.db);
var db = mongoose.connection;

db.on('error',  function (err) {
    console.error('MongoDB error: %s', err);
});
db.once('open', function cb () {
    console.log('Connection with database succeeded.');
});

exports.mongoose = mongoose;
exports.db = db;
