define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integrationAlternate.html'
], function($, _, Backbone, tpl){

	var IntegrationAlternateView = Backbone.View.extend({

		tagName: 'div',
		className: 'integration alternate',

		events: {
			'click .integration.alternate' : 'toogleDetails'
		},

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
		},
    // render template after data refresh
    render: function () {
    	console.log("Rendering IntegrationAlternateView")
      	$(this.el).html(this.template(this.model.toJSON()));
      	return this;
    },

	  toogleDetails: function(event){
	  	console.log("Toggle details");
	  	debugger;
	  }
	});

	return IntegrationAlternateView;
});