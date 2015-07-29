var Hapi = require ('hapi');

var serverConfig = {
    host: 'localhost',
    port: 8000
};

// create server
var server = new Hapi.Server();
server.connection(serverConfig);

// server start log
server.start(function () {
    console.log('Server running at:', server.info.uri);
});

// routes
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    });
});

