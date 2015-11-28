define(['collections/integrations', 'models/integration', 'sinon'], function(IntegrationCollection, IntegrationModel, sinon) {
	describe('Integration Model', function() {
		describe('when instantiated', function() {
		    it('it should exhibit attributes', function() {

		    	var now = new Date();

		    	var model = new IntegrationModel({
		    		change_list : 100,
		    		owner: "Foo bar",
					time_started: now,
					build: true,
					unit_test: 1, // percentage
					functional_test: 1, // percentage
					status: "Pending",
					last_build: now,
					debug: true,
					release: true,
					unit_test_passed: 100,
					unit_test_warning: 1,
					unit_test_time: now,
					functional_test_passed: 100,
					functional_test_warning: 1,
					functional_test_time: now
		    	});

	    		expect(model.get('change_list')).toEqual(100);
	    		expect(model.get('owner')).toEqual("Foo bar");
	    		expect(model.get('time_started')).toEqual(now);
	    		expect(model.get('build')).toEqual(true);
	    		expect(model.get('unit_test')).toEqual(1);
	    		expect(model.get('functional_test')).toEqual(1);
	    		expect(model.get('status')).toEqual("Pending");
	    		expect(model.get('last_build')).toEqual(now);
	    		expect(model.get('debug')).toEqual(true);
	    		expect(model.get('release')).toEqual(true);
	    		expect(model.get('unit_test_passed')).toEqual(100);
	    		expect(model.get('unit_test_warning')).toEqual(1);
	    		expect(model.get('unit_test_time')).toEqual(now);
	    		expect(model.get('functional_test_passed')).toEqual(100);
	    		expect(model.get('functional_test_warning')).toEqual(1);
	    		expect(model.get('functional_test_time')).toEqual(now);
		    });

		    it ('it should get default values ', function(){
		    	var model = new IntegrationModel();

		    	expect(model.get('change_list')).toEqual(model.defaults['change_list']);
		    	expect(model.get('owner')).toEqual(model.defaults['owner']);
		    	expect(model.get('build')).toEqual(model.defaults['build']);
		    	expect(model.get('unit_test')).toEqual(model.defaults['unit_test']);
		    	expect(model.get('functional_test')).toEqual(model.defaults['functional_test']);
		    	expect(model.get('status')).toEqual(model.defaults['status']);
		    });
		});

		describe('when working with collections', function(){

			beforeEach(function() {
				this.server = sinon.fakeServer.create();
			});

		    it ('it should be created from a model collection', function(){
		    	var collection = new IntegrationCollection;

		    	var model = collection.create();

		    	expect(model).not.toBe(null);
		    });

		    afterEach(function() {
				this.server.restore();
			});
		});
	});
});