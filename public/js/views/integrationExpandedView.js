define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integrationExpanded.html'
], function($, _, Backbone, tpl){

	var IntegrationExpandedView = Backbone.View.extend({

		tagName: 'div',
		className: 'integration expanded',

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
		},
	    // render template after data refresh
	    render: function () {
	    	console.log("Rendering IntegrationExpandedView")
	      	$(this.el).html(this.template(this.model.toJSON()));
	      	return this;
	    }
	});

	return IntegrationExpandedView;
});