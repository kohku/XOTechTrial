define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integration.html'
], function($, _, Backbone, tpl){

	var IntegrationView = Backbone.View.extend({

		tagName: 'div',
		className: 'integration',

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
		},
	    // render template after data refresh
	    render: function () {
	    	console.log("Rendering IntegrationView")
	      	$(this.el).html(this.template(this.model.toJSON()));
	      	return this;
	    }
	});

	return IntegrationView;
});