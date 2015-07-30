
var Bcrypt = require('Bcrypt');

// PASSWORD ENCRYPTION
// to encode password to bcrypt use 
// https://www.dailycred.com/article/bcrypt-calculator

// users 
var users = {
    abondarenko: {
        username: 'abondarenko',
        password: '$2a$04$Z2mko8cnGp2o8EPUfvgpweB1LPUMd32WWi5AF7wUpVcgLhMoJT4Mi',
        name: 'Oleksii Bondarenko',
        id: '1'
    }
};

var validate = function (request, username, password, cb) {
    var user = users[username];
    if (!user) {
        return callback(null, false);
    }
    Bcrypt.compare(password, user.password, function (err, isValid) {
        cb(err, isValid, {
            id: user.id,
            name: user.name
        });
    });
};

module.exports = {
    validate: validate
};