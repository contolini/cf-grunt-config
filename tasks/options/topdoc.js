var grunt = require('grunt');

module.exports = {
  demo: {
    options: {
      source: 'demo/static/css/',
      destination: 'demo/',
      template: 'node_modules/cf-component-demo/' + ( grunt.option('tpl') || 'raw' ) + '/',
      templateData: {
        ltIE9AltSource: '<%= opt.ltIE9AltCSS %>',
        ltIE8Source: '<%= opt.ltIE8CSS %>',
        html5Shiv: true,
        family: '<%= pkg.name %>',
        title: '<%= pkg.name %> demo',
        repo: '<%= pkg.homepage %>',
        custom: '<%= grunt.file.read("demo/custom.html") %>'
      }
    }
  },
  docs: {
    options: {
      source: 'docs/static/css/',
      destination: 'docs/',
      template: 'node_modules/cf-component-demo/' + ( grunt.option('tpl') || 'code_examples' ) + '/',
      templateData: {
        family: '<%= pkg.name %>',
        title: '<%= pkg.name %> docs',
        repo: '<%= pkg.homepage %>'
      }
    }
  }
};
