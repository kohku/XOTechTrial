// main.js
require.config({
    baseUrl: "/js/",
    paths: {
        jquery: 'libs/jquery-1.11.3',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        text: 'libs/text',
        json2: 'libs/json2',
        jqueryui: 'libs/jquery-ui',
        moment: 'libs/moment',
        numeral: 'libs/numeral',
        chart: 'libs/chart',
        templates: '../templates'
    }
});

require(['app'], function (app) {
    // Launching the app.
    app.start();
});