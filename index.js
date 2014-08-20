/**
 * Module dependencies
 */
var eachAsync = require("each-async")
var cssnext = require("cssnext")

/**
 * Grunt plugin for cssnext
 *
 * @param  {Object} grunt
 */
module.exports = function(grunt) {
  grunt.registerMultiTask("cssnext", "Use tomorrow's CSS syntax, today", function() {
    var options = this.options()

    eachAsync(this.files, function(el, i, next) {
      options.from = el.src[0]
      options.to = el.dest
      grunt.file.write(el.dest, cssnext(grunt.file.read(el.src[0]), options))
      next()
    }, this.async())
  })
}
