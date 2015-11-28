require.config({
  baseUrl: "../../js/",
  //urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'libs/jquery-1.11.3',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    'backbone.localStorage': 'libs/backbone.localStorage',
    'jasmine': '../test/lib/jasmine',
    'jasmine-html': '../test/lib/jasmine-html',
    'jasmine-boot': '../test/lib/boot',
    spec: '../test/jasmine/spec/'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});

window.store = "TestStore"; // override local storage store name - for testing

require(['jasmine-boot'], function(_, $){
  require(['spec/models/integrationSpec'], function(){
    //trigger Jasmine
    window.onload();
  });
});