
// return info from package json
exports.get = function (request, reply) {
    reply({
        info: require('../../package.json')
    });
};

// test user auth
exports.ping = function (request, reply) {
    reply({
        user: request.auth.credentials
    });
};