define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/integrations/list.html',
	'collections/integrations'
], function($, _, Backbone, tpl, IntegrationList){

	var listView = Backbone.View.extend({

		initialize: function(){
			var itemList;
			this.template = _.template(tpl);
			this.collection = new IntegrationList();
		},
    // render template after data refresh
    render: function () {
        $(this.el).html(this.template({ items: this.collection.toJSON() }));
    }
	});

	return listView;
});