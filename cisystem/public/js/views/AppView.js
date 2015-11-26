// The Application
// ---------------

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/app.html'
], function($, _, Backbone, tpl){
	
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
			this.template = _.template(tpl);
			$(this.el).hide();
			this.render();
			$(this.el).show('slow');
		},

	  // Rendering.
		render: function(){
			console.log("AppView.render");
			$(this.el).html(this.template());
			return this;
		}
	});

	return AppView;
});