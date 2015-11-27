//app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/integrations',
    'views/appView'
], function ($, _, Backbone, IntegrationCollection, AppView) {

    var start = function () {
        console.log("Staring the app");

    	var integrations = new IntegrationCollection;

    	var app = new AppView({ collection: integrations });
    }

    return {
        start: start
    };
});