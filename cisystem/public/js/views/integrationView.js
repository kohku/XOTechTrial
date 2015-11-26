define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integrations.html'
], function($, _, Backbone, tpl){

	var integrationView = Backbone.View.extend({

		events: {
			'click .integration' : 'toogleDetails'
		},

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
		},
    // render template after data refresh
    render: function () {
      $(this.el).html(this.template({ items: this.model.toJSON() }));
      return this;
    },

	  toogleDetails: function(event){
	  	console.log("Toggle details");
	  	debugger;
	  }
	});

	return integrationView;
});