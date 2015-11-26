//app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'js/collections/integrations.js',
    'views/AppView'
], function ($, _, Backbone, IntegrationCollection, AppView) {

    var start = function () {
    	console.log("Staring the app");

    	var integrations = new IntegrationCollection;

    	var App = new AppView({ collection: integrations });

    }

    return {
        start: start
    };
});