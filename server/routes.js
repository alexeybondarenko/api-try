var Joi = require('joi');

var Info = require('./modules/info/info-controller');
var Blog = require('./modules/blog/blog-controller');
var Apps = require('./modules/apps/apps-controller');

exports.endpoints = [
  // routes
  {method: 'GET', path: '/info', config: {handler: Info.get}},
  {method: 'GET', path: '/ping', config: {auth: 'simple', handler: Info.ping}},

  // Blog

  {method: 'GET', path: '/blogs', config: {auth: 'simple', handler: Blog.findAll}},
  {method: 'POST', path: '/blogs', config: {auth: 'simple', handler: Blog.create}},

  {
    method: 'GET', path: '/blogs/{id}',
    config: {
      auth: 'simple',
      handler: Blog.findById,
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'PUT', path: '/blogs/{id}',
    config: {
      auth: 'simple',
      handler: Blog.update,
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'DELETE', path: '/blogs/{id}',
    config: {
      auth: 'simple',
      handler: Blog.remove,
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  },

  // Apps

  {method: 'GET', path: '/apps', config: {auth: 'simple', handler: Apps.findAll}},
  {method: 'POST', path: '/apps', config: {auth: 'simple', handler: Apps.create}},
  {
    method: 'GET', path: '/apps/{id}',
    config: {
      auth: 'simple',
      handler: Apps.findById,
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'PUT', path: '/apps/{id}',
    config: {
      auth: 'simple',
      handler: Apps.update,
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'DELETE', path: '/apps/{id}',
    config: {
      auth: 'simple',
      handler: Apps.remove,
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  }


  //{
  //  method: 'POST', path: '/apps/{id}/upload', config: {
  //  payload: {
  //    maxBytes: 10 * 1024 * 1024,
  //    output: 'stream',
  //    parse: true,
  //    allow: 'multipart/form-data'
  //  },
  //  auth: 'simple',
  //  handler: Apps.upload
  //}
  //}
];
