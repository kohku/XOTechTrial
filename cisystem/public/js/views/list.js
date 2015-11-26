define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/list.html',
	'collections/integrations'
], function($, _, Backbone, tpl, Collection){
	var listView = Backbone.View.extend({
		var itemList;
		this.template = _.template(tpl);

	});

	return listView;
});