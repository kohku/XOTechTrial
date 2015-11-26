// Integration collection
// ----------

define([
	'jquery',
	'underscore',
	'backbone',
	'models/integration'
], function($, _, Backbone, Model){

	var integrationCollection = Backbone.Collection.extend({

		model: Model,
		
		url: 'http://localhost:3000/integrations.json',

		initialize: function() {
			console.log("IntegrationCollection.initialize");
		}
	});

	return integrationCollection;
});