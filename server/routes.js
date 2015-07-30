var Joi = require('joi');

var Info = require('./modules/info/info-controller');
var Blog = require('./modules/blog/blog-controller');

exports.endpoints = [
    // routes
    { method: 'GET', path: '/info', config: { handler: Info.get }},
    { method: 'GET', path: '/ping', config: { auth: 'simple', handler: Info.ping }},
    
    { method: 'GET', path: '/blogs', config: { auth: 'simple', handler: Blog.findAll }},
    { method: 'POST', path: '/blogs', config: { auth: 'simple', handler: Blog.create }},
    
    { method: 'GET', path: '/blogs/{id}', config: { 
        auth: 'simple', 
        handler: Blog.findById,
        validate: {
            params: {
                id: Joi.string().required()
            }
        }
    }},
    { method: 'PUT', path: '/blogs/{id}', config: { 
        auth: 'simple', 
        handler: Blog.update,
        validate: {
            params: {
                id: Joi.string().required()
            }
        }
    }},
    { method: 'DELETE', path: '/blogs/{id}', config: { 
        auth: 'simple', 
        handler: Blog.remove,
        validate: {
            params: {
                id: Joi.string().required()
            }
        }
    }},
];