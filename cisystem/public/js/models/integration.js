// Integration Model
// ----------

define([
	'underscore',
	'backbone',
], function(_, Backbone){

	var IntegrationModel = Backbone.Model.extend({

		// default attributes for the integration item.
		default: function(){
			return {
				change_list: 0,
				owner: "n/a",
				time_started: new Date(),
				build: 0,	// percentage
				unit_test: 0, // percentage
				functional_test: 0, // percentage
				status: "Pending"
			}
		},

		initialize: function(){
			// TODO: Not sure if need to initialize
			console.log("Initializing IntegrationModel");
		}
	});

	return IntegrationModel;
});