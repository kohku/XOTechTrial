// Integration Model
// ----------

define([
	'underscore',
	'backbone',
], function(_, Backbone){

	var integration = Backbone.Model.extend({

		// default attributes for the integration item.
		default: function(){
			return {
				changeList: 0,
				owner: "n/a",
				timeStarted: new Date(),
				build: 0,	// percentage
				unitTest: 0, // percentage
				functionalTest: 0, // percentage
				status: "Pending"
			}
		},

		initialize: function(){
			console.log("IntegrationModel.initialize");
		}
	});

	return integration;
});