// The Application
// ---------------

define([
	'jquery',
	'underscore',
	'backbone',
	'views/integrationCollapsedView',
	'views/integrationExpandedView',
	'moment',
	'numeral',
	'jqueryui',
	'utils'
], function($, _, Backbone, IntegrationCollapsedView, IntegrationExpandedView, moment, numeral){
	
	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// DOM app element
		el: $('#cisapp'),
		// DOM flash element for
		flash: $('#flash'),
		// Registering events we are interested into
		events: {
			'broadcast #flash'	: 'broadcast',		// register for flash broadcasting
			'click .integration' : 'expandCollapse'
		},
		// At initialization we bind to the relevant events on the `Integration List`
		// collection, when items are added or changed.
		initialize: function(){
			console.log("Initializing AppView");

			// settin up listeners
			this.listenTo(this.collection, 'add', this.addOne);
			this.listenTo(this.collection, 'reset', this.addAll);
			this.listenTo(this.collection, 'all', this.render);
			this.listenTo(this.collection, 'error', this.onError);
			this.listenTo(this.flash, 'broadcast', this.broacast);

			// pulling out the data from the data store
			this.collection.fetch();
		},
		onError: function(collection, response, options){
            if (response.status === 404) {
            	this.flash.trigger('broadcast', { type: 'error', message: 'Houston, we have a problem!. Resource not found.' });
            } else if (response.status === 500) {
                this.flash.trigger('broadcast', { type: 'error', message: 'Houston, we have a problem!. Internal Server Error.' });
            }
		},

		// Re-rendering the App just means refreshing the statistics.
		render: function(){
			// formatting time elements
			$('time').each(function(index, element){
				var time = $(element);
				var value = moment(time.attr('datetime')).format(time.data('format'));
				time.data('title', value);
				time.text(value);
			});
			// creating progress bars
			$('.build-progress').each(function(index, element){
				var progress = $(element);
				$(element).progressbar({
					value: progress.data('value') * 100,
					complete: function( event, ui ){
						$(this).find('div.ui-progressbar-value').addClass('progress-' + progress.data('status'));
					}
				});
			});
			// formatting percentage elements
			$('.percentage').each(function(index, element){
				var percentage = $(element);
				percentage.text(numeral(percentage.data('value')).format(percentage.data('format')));
			});
		},

		// Add a single integration item to the list by creating a view for it, and
		// appending its element to the "table".
		addOne: function(integration) {
			var view = new IntegrationCollapsedView({ model: integration, collection: this.collection });
			$('#integration-list-view > .view-body').append(view.render().el);
			var view = new IntegrationExpandedView({ model: integration, collection: this.collection });
			$('#integration-list-view > .view-body').append(view.render().el);
		},
		// Add all items in the Integration collection at once.
		addAll: function() {
			this.collection.each(this.addOne, this);
		},
		// Broadcast events. It basically appends a new iten to the flash DOM listener.
		broadcast : function(event, flash){
			var alertTemplate = '<div class="alert {0}"><button type="button" class="close" data-dismiss="alert">×</button><strong>{1}</strong></div></div>';
			switch(flash.type){
				case 'error':
					this.flash.append(alertTemplate.format('alert-danger', flash.message));
					break;
				case 'success':
					this.flash.append(alertTemplate.format('alert-success', flash.message));
					break;
				case 'info':
					this.flash.append(alertTemplate.format('alert-info', flash.message));
					break;
				default:
					this.flash.append(alertTemplate.format('alert-warning', flash.message));
					break;
			}
		},
		// Expand/collaps elements views 
		expandCollapse: function(event){
			console.log("Expanding/Collapsing");

			var current = $(event.currentTarget);
			var next = $(event.currentTarget.nextSibling);
			var previous = $(event.currentTarget.previousElementSibling);
			var list = $(event.currentTarget.parentElement);

			// Did we expanded already?
			if (current.hasClass('expanded')){
				if (!previous || previous.hasClass('expanded')){
					this.flash.trigger('broadcast', { type: 'error', message: 'Houston, we have a problem!. The item is already expanded.' });
					return;
				}

				// animate expand
				previous.slideDown('fast');
				current.hide();
			} else { 
				if (!next.hasClass('expanded')){
					this.flash.trigger('broadcast', { type: 'error', message: 'Houston, we have a problem!. The item is already collapsed.' });
					return;
				}

				// hide all others expanded and collapse them
				list.find('.expanded').each(function(index, element){
					var expanded = $(element);
					var collapsed = $(element.previousElementSibling);
					// animate collapse
					if (collapsed)
						collapsed.slideDown('fast');
					// hide other expanded
					if (expanded)
						expanded.hide();
				});
	
				// animate collapse
				next.slideDown('fast');
				current.hide();
			}
		}
	});

	return AppView;
});