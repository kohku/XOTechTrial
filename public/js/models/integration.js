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
				build: false,
				unit_test: 0, // percentage
				functional_test: 0, // percentage
				status: "Pending",
				last_build: new Date(),
				debug: false,
				release: false,
				unit_test_passed: 0,
				unit_test_warning: 0,
				unit_test_time: new Date(),
				functional_test_passed: 0,
				functional_test_warning: 0,
				functional_test_time: new Date()
			}
		},

		initialize: function(){
			// TODO: Not sure if need to initialize
			console.log("Initializing IntegrationModel");
		}
	});

	return IntegrationModel;
});