
var Hapi = require ('hapi');
var HapiBasicAuth = require('hapi-auth-basic');

var Path = require('path');

// logging
var Good = require ('good');
var GoodConsole = require('good-console');
var GoodFile = require('good-file');

var BasicAuth = require('./server/basic-auth');
var Routes = require('./server/routes');
var CONFIG  = require('./server/config');
var Db  = require('./server/db');


var serverConfig = {
    host: CONFIG.server.host || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || CONFIG.server.port
};

// create server
var server = new Hapi.Server();
server.connection(serverConfig);

// /
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: Path.join(__dirname, 'public/app')
    }
  }
});

// server plugins
var plugins = [{
    register: Good,
    options: {
        reporters: [{
            reporter: GoodConsole,
            events: {
                response: '*',
                log: '*'
            }
        }, {
            reporter: GoodFile,
            events: { ops: '*' },
            config: './logs/api.log'
        }]
    }
}, HapiBasicAuth];

// server Good logs console
server.register(plugins, function (err) {
    if (err) {
        throw err; // something very bad happened loading the plugin
    }
    server.auth.strategy('simple','basic', {validateFunc: BasicAuth.validate});
    // adding routes to server
    server.route(Routes.endpoints);

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
