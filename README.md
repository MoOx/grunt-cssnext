# grunt-[cssnext](https://github.com/cssnext/cssnext)

[![Build Status](http://img.shields.io/travis/cssnext/grunt-cssnext.svg)](https://travis-ci.org/cssnext/grunt-cssnext)
[![NPM version](http://img.shields.io/npm/v/grunt-cssnext.svg)](https://www.npmjs.org/package/grunt-cssnext)

> Use tomorrow's CSS syntax, today. Via Grunt

**Issues with the output should be reported on [cssnext issue tracker](https://github.com/cssnext/cssnext/issues).**

## Install

If you haven't used [grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a `Gruntfile.js` as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```console
$ npm install --save-dev grunt-cssnext
```


Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-cssnext")
```

### Usage

```js
grunt.initConfig({
  cssnext: {
    options: {
      sourcemap: true
    },
    dist: {
      files: {
        "dist/index.css": "src/index.css"
      }
    }
  }
})

grunt.loadNpmTasks("grunt-cssnext")
grunt.registerTask("default", ["cssnext"])
```

### Options

Options are directly passed to cssnext, so checkout [cssnext options](http://cssnext.io/usage/) directly

_Note: `from` & `to` options are automatically specified using grunt source & dest._

---

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
