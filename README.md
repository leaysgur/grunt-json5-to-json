# grunt-json5-to-json

> Convert json5 to json.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json5-to-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json5-to-json');
```

## The "json5_to_json" task

### Overview
In your project's Gruntfile, add a section named `json5_to_json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json5_to_json: {
    options: {
      replacer: null,
      space: 2
    },
    target: {
      options: {
        space: 4
      },
      src: ['path/to/**/*.json5'],
      dest: 'path/to/json/'
    },
  },
});
```

### Options

#### options.replacer
Type: `Function` or `Array`
Default value: `null`

Same as arguments for native `JSON.stringify`.

#### options.space
Type: `Number`
Default value: `2`

Same as arguments for native `JSON.stringify`.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- 0.1.0: pre release.
- 0.1.1: npm publish.
- 0.1.2: Refactor some code.
- 0.1.3: Grunt log error now display which file is having an issue when parsing.(by [wiredmax](https://github.com/wiredmax))
