// The Application
// ---------------

define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/app.html',
	'views/integrations/list',
	'utils'
], function($, _, Backbone, tpl, ListView){
	
	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		el: $('#cisapp'),

		events: {
			'broadcast #flash'	: 'broadcast' // register for flash broadcasting
		},

	  // At initialization we bind to the relevant events on the `Integration List`
	  // collection, when items are added or changed. Kick things off by
	  // loading any preexisting items.
		initialize: function(){
			console.log("AppView.initialize");
			this.template = _.template(tpl);

			this.listenTo(this.collection, 'add', this.addOne);
			this.listenTo(this.collection, 'reset', this.addAll);
			this.listenTo(this.collection, 'all', this.render);

			$(this.el).hide();
			$(this.el).html(this.template());

			this.collection.fetch({
				success: function(collection){
				},
				error: function(coll, res){
					if (res.status === 404){

					} else if (res.status === 500){
					}
				}
			});

			$(this.el).show('slow');
		},

	  // Rendering.
		render: function(){
			console.log("AppView.render");

			if (this.collection.length){
				// TODO: Update something
			}
			else {
			}
			return this;
		},

		// Add a single todo item to the list by creating a view for it, and
	  // appending its element to the `<ul>`.
	  addOne: function(integration) {
	    var view = new ListView({model: integration, collection: this.collection });
	    $(this.el).append(view.render());
	  },

	  // Add all items in the **Todos** collection at once.
	  addAll: function() {
	    this.collection.each(this.addOne, this);
	  },

		broadcast : function(event, flash){
			var alertTemplate = '<div class="alert {0}"><button type="button" class="close" data-dismiss="alert">×</button><strong>{1}</strong></div></div>';
			switch(flash.type){
				case 'error':
					$(this).append(alertTemplate.format('alert-error', flash.message));
					break;
				case 'success':
					$(this).append(alertTemplate.format('alert-success', flash.message));
					break;
				case 'info':
					$(this).append(alertTemplate.format('alert-info', flash.message));
					break;
				default:
					$(this).append(alertTemplate.format('', flash.message));
					break;
			}
		}
	});

	return AppView;
});