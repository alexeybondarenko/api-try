var Blog = require ('./blog-model'),
    Boom = require ('boom');

exports.findAll = function (req, res) {
    if (!Blog) return res({});
    
    Blog.find(function (err, result) {
        if (err) {
            return res(Boom.wrap(err));
        }        
        res(result);
    });
};
exports.create = function (req, res) {
    var blog = new Blog(req.payload);
    blog.save(function (err, blog) {
        if (err) return res(Boom.wrap(err));
        res(blog);
    });
};

exports.findById = function (req, res) {
    if (!Blog) return res({});
    Blog.findById(req.params.id, function (err, result) {
        if (err) return res(Boom.wrap(err));
        res(result);
    });
};
exports.remove = function (req, res) {
    if (!Blog) return res({});
    Blog.findByIdAndRemove(req.params.id, function (err, blog) {
        if (err) return res(Boom.wrap(err));
        res(blog);
    });
};
exports.update = function (req, res) {
    if (!Blog) return res({});
    Blog.findByIdAndUpdate(req.params.id, req.payload, function (err, result) {
        if (err) return res(Boom.wrap(err));
        res(result);
    });
};