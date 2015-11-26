//app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/integrations',
    'views/app'
], function ($, _, Backbone, IntegrationList, AppView) {

    var start = function () {
    	console.log("Staring the app");

    	var integrations = new IntegrationList;

    	var App = new AppView({ collection: integrations });

    }

    return {
        start: start
    };
});