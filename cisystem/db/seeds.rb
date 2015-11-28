# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Integration.create(change_list: 432464, owner: 'JTuck', time_started: '2014-4-17 9:42', build: false, last_build: '2014-4-17 7:40', debug: false, release: false, unit_test: 0, unit_test_passed: 0, unit_test_warning: 0, unit_test_time: '0000-0-0 0:00', functional_test: 0, functional_test_passed: 0, functional_test_warning: 0, functional_test_time: '0000-0-0 0:00', status: 'Pending')
Integration.create(change_list: 432463, owner: 'Dora', time_started: '2014-4-17 7:40', build: true, last_build: '2014-4-17 7:40', debug: true, release: true, unit_test: 0.8, unit_test_passed: 0, unit_test_warning: 0, unit_test_time: '0000-0-0 0:00', functional_test: 0, functional_test_passed: 0, functional_test_warning: 0, functional_test_time: '0000-0-0 0:00', status: 'Running')
Integration.create(change_list: 432462, owner: 'Samy', time_started: '2014-4-17 6:42', build: true, last_build: '2014-4-17 3:14', debug: true, release: true, unit_test: 1, unit_test_passed: 342, unit_test_warning: 3, unit_test_time: '0000-0-0 4:30', functional_test: 1, functional_test_passed: 14321, functional_test_warning: 2000, functional_test_time: '0000-0-0 3:30', status: 'Passed')
Integration.create(change_list: 432461, owner: 'JTuck', time_started: '2014-4-17 4:28', build: false, last_build: '2014-4-17 3:14', debug: true, release: false, unit_test: 0, unit_test_passed: 0, unit_test_warning: 0, unit_test_time: '0000-0-0 0:00', functional_test: 0, functional_test_passed: 0, functional_test_warning: 0, functional_test_time: '0000-0-0 0:00', status: 'Failed')
Integration.create(change_list: 432459, owner: 'Samy', time_started: '2014-4-17 3:14', build: true, last_build: '2014-4-17 00:14', debug: true, release: true, unit_test: 1, unit_test_passed: 329, unit_test_warning: 10, unit_test_time: '0000-0-0 3:30', functional_test: 1, functional_test_passed: 14200, functional_test_warning: 1000, functional_test_time: '0000-0-0 2:54', status: 'Passed')
Integration.create(change_list: 432458, owner: 'Dora', time_started: '2014-4-17 1:14', build: true, last_build: '2014-4-17 00:14', debug: true, release: true, unit_test: 1, unit_test_passed: 100, unit_test_warning: 100, unit_test_time: '0000-0-0 0:00', functional_test: 0, functional_test_passed: 0, functional_test_warning: 0, functional_test_time: '0000-0-0 0:00', status: 'Failed')