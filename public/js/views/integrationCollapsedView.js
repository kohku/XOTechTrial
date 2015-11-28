define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integrationCollapsed.html'
], function($, _, Backbone, tpl){

	var IntegrationCollapsedView = Backbone.View.extend({

		tagName: 'div',
		className: 'integration',

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
		},
	    // render template after data refresh
	    render: function () {
	    	console.log("Rendering IntegrationCollapsedView")
	      	$(this.el).html(this.template(this.model.toJSON()));
	      	return this;
	    }
	});

	return IntegrationCollapsedView;
});