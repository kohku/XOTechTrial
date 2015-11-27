define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integrationDetail.html'
], function($, _, Backbone, tpl){

	var IntegrationDetailView = Backbone.View.extend({

		tagName: 'tr',
		className: 'integration_detail',

		events: {
			'click .integration' : 'toogleDetails'
		},

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
		},
    // render template after data refresh
    render: function () {
    	console.log("Rendering IntegrationDetailView")
      	$(this.el).html(this.template(this.model.toJSON()));
      	return this;
    },

	  toogleDetails: function(event){
	  	console.log("Toggle details");
	  	debugger;
	  }
	});

	return IntegrationDetailView;
});