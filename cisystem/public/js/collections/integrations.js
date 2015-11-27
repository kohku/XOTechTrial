// Integration collection
// ----------

define([
	'jquery',
	'underscore',
	'backbone',
	'models/integration'
], function($, _, Backbone, IntegrationModel){

	var IntegrationCollection = Backbone.Collection.extend({

		model: IntegrationModel,
		
		url: 'http://localhost:3000/integrations.json',

		initialize: function() {
			console.log("Initializing an integration collection");
		}
	});

	return IntegrationCollection;
});