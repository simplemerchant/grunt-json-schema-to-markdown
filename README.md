# grunt-json-schema-to-markdown

> Grunt tool to convert JSON schema to Markdown documentation

[ ![Codeship Status for simplemerchant/grunt-json-schema-to-markdown](https://codeship.com/projects/9fe79e80-0640-0134-8856-6214c662a8db/status?branch=master)](https://codeship.com/projects/154650)

## Overview

This is currently a basic wrapper around the current library: [json-schema-to-markdown](https://www.npmjs.com/package/json-schema-to-markdown)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-schema-to-markdown --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-schema-to-markdown');
```

## The "json_schema_to_markdown" task

### Overview
In your project's Gruntfile, add a section named `json_schema_to_markdown` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_schema_to_markdown: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

No options currently available for this tool

### Usage Examples

#### Default Options
The output markdown file is specified as a key in the files parameter. Multiple
outputs can be specified. Multiple inputs may be combined into one markdown document.

```js
grunt.initConfig({
  json_schema_to_markdown: {
    options: {},
    files: {
      'docs/mySchemas.md': ['schemas/schema1.json', 'schemas/schema2.json'],
    },
  },
});
```

## Release History

### 0.1.0 Initial release
