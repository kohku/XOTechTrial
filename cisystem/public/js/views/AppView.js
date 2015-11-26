// The Application
// ---------------

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	
	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		el: $('#cisapp'),

		events: {

		},

	  // At initialization we bind to the relevant events on the `Integration List`
	  // collection, when items are added or changed. Kick things off by
	  // loading any preexisting items.
		initialize: function(){
			console.log("AppView.initialize");
		},

	  // Rendering.
		render: function(){
			console.log("AppView.render");
		}
	});

	return AppView;
});