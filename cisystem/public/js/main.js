// main.js
require.config({
    paths: {
        jquery: 'libs/jquery-1.11.3',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        text: 'libs/text',
        json2: 'libs/json2',
        jqueryui: 'libs/jquery-ui',
        moment: 'libs/moment',
        templates: '../templates'
    }

});

require(['app'], function (app) {
    app.start();
});