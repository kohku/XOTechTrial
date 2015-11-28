define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integrationAlternate.html'
], function($, _, Backbone, tpl){

	var IntegrationAlternateView = Backbone.View.extend({

		tagName: 'div',
		className: 'integration alternate',

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
		},
	    // render template after data refresh
	    render: function () {
	    	console.log("Rendering IntegrationAlternateView")
	      	$(this.el).html(this.template(this.model.toJSON()));
	      	return this;
	    }
	});

	return IntegrationAlternateView;
});