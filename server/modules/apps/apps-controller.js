var Boom = require('boom');
var App = require('./apps-model');

var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

exports.create = function (req, res) {
  var app = new App(req.payload);
  app.save(function (err, blog) {
    if (err) return res(Boom.wrap(err));
    res(blog);
  });
};

exports.findAll = function (req, res) {
  if (!App) return res({});

  App.find(function (err, result) {
    if (err) {
      return res(Boom.wrap(err));
    }
    res(result);
  });
};

exports.findById = function (req, res) {
  if (!App) return res({});
  App.findById(req.params.id, function (err, result) {
    if (err) return res(Boom.wrap(err));
    res(result);
  });
};
exports.remove = function (req, res) {
  if (!App) return res({});
  App.findByIdAndRemove(req.params.id, function (err, blog) {
    if (err) return res(Boom.wrap(err));
    res(blog);
  });
};
exports.update = function (req, res) {
  if (!App) return res({});
  var app = new App(req.payload);
  App.findByIdAndUpdate(req.params.id, app, { runValidators: true }, function (err, result) {
    if (err) return res(Boom.wrap(err));
    res(app);
  });
};

//
//exports.upload = function (req, res) {
//  var data = req.payload,
//      server = req.server;
//  if (data.file) {
//    var name = data.file.hapi.filename;
//    var path = appDir + "/uploads/" + name;
//    var file = fs.createWriteStream(path);
//
//    file.on('error', function (err) {
//      console.error(err)
//    });
//    data.file.pipe(file);
//
//    data.file.on('end', function (err) {
//      var ret = {
//        filename: data.file.hapi.filename,
//        headers: data.file.hapi.headers
//      };
//      res (JSON.stringify(ret));
//    })
//  }
//};


