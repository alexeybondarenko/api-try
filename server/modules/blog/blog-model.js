var mongoose = require('mongoose');
var blogSchema = require('./blog-schema');

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;