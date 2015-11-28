// The Application
// ---------------

define([
	'jquery',
	'underscore',
	'backbone',
	'views/integrationView',
	'views/integrationAlternateView',
	'moment',
	'numeral',
	'jqueryui',
	'utils'
], function($, _, Backbone, IntegrationView, IntegrationAlternateView, moment, numeral){
	
	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		el: $('#cisapp'),

		events: {
			'broadcast #flash'	: 'broadcast', // register for flash broadcasting
			
		},

		// At initialization we bind to the relevant events on the `Integration List`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting items.
		initialize: function(){
			console.log("Initializing AppView");

			this.listenTo(this.collection, 'add', this.addOne);
			this.listenTo(this.collection, 'reset', this.addAll);
			this.listenTo(this.collection, 'all', this.render);

			this.collection.fetch();
		},

		// Re-rendering the App just means refreshing the statistics.
		render: function(){
			//console.log("Rendering AppView");

			$('time').each(function(index, element){
				var time = $(element);
				var value = moment(time.attr('datetime')).format(time.data('format'));
				time.data('title', value);
				time.text(value);
			});

			$('.build-progress').each(function(index, element){
				var progress = $(element);
				$(element).progressbar({
					value: progress.data('value') * 100,
					complete: function( event, ui ){
						$(this).find('div.ui-progressbar-value').addClass('progress-' + progress.data('status'));
					}
				});
			});

			$('.percentage').each(function(index, element){
				var percentage = $(element);
				percentage.text(numeral(percentage.data('value')).format(percentage.data('format')));
			});
		},

		// Add a single integration item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function(integration) {
			var view = new IntegrationView({ model: integration, collection: this.collection });
			$('#integration-list-view > .view-body').append(view.render().el);
			var view = new IntegrationAlternateView({ model: integration, collection: this.collection });
			$('#integration-list-view > .view-body').append(view.render().el);
		},

		// Add all items in the **Integration** collection at once.
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