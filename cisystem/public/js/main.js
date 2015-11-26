// main.js
require.config({
    paths: {
        jquery: 'libs/jquery-1.11.3',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        json2: 'libs/json2',
        templates: '../templates'
    }

});

require(['app'], function (app) {
    app.start();
});