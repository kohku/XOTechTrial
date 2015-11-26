# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Integration.create(change_list: 432464, owner: 'JTuck', time_started: '2014-4-17 9:42', build: 0, unit_test: 0, functional_test: 0, status: 'Pending')
Integration.create(change_list: 432463, owner: 'Dora', time_started: '2014-4-17 7:40', build: 0.8, unit_test: 0, functional_test: 0, status: 'Running')
Integration.create(change_list: 432462, owner: 'Samy', time_started: '2014-4-17 6:42', build: 1, unit_test: 1, functional_test: 1, status: 'Passed')
Integration.create(change_list: 432461, owner: 'JTuck', time_started: '2014-4-17 4:28', build: 0, unit_test: 0, functional_test: 0, status: 'Failed')
Integration.create(change_list: 432459, owner: 'Samy', time_started: '2014-4-17 3:14', build: 1, unit_test: 1, functional_test: 1, status: 'Passed')
Integration.create(change_list: 432458, owner: 'Dora', time_started: '2014-4-17 1:14', build: 1, unit_test: 0, functional_test: 0, status: 'Failed')