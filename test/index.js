var test = require("tape")
var grunt = require("grunt")

test("cssnext grunt plugin", function(t) {
  grunt.initConfig({
    cssnext: {
      dev: {
        options: {
          sourcemap: true
        },
        files: {
          "test/fixtures/dev.actual.css": "test/fixtures/index.css"
        }
      },
      dist: {
        options: {
          compress: true
        },
        files: {
          "test/fixtures/dist.actual.css": "test/fixtures/index.css"
        }
      }
    }
  })

  grunt.loadTasks("tasks")

  grunt.log.muted = true

  grunt.tasks(["cssnext"], {gruntfile: false}, function() {
    var actual = grunt.file.read("test/fixtures/dev.actual.css").trim()
    var expected = grunt.file.read("test/fixtures/dev.expected.css").trim()
    t.equal(actual, expected, "transform correctly, & contains sourcemap")

    actual = grunt.file.read("test/fixtures/dist.actual.css").trim()
    expected = grunt.file.read("test/fixtures/dist.expected.css").trim()
    t.equal(actual, expected, "transform correctly, even compressed")

    t.end()
  })
})
