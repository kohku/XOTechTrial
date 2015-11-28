class AddMorePropertiesToIntegrations < ActiveRecord::Migration
  def change
  	change_column :integrations, :build, 'boolean USING CAST(build AS boolean)'
  	add_column :integrations, :last_build, :datetime
  	add_column :integrations, :debug, 'boolean USING CAST(debug AS boolean)'
  	add_column :integrations, :release, 'boolean USING CAST(release AS boolean)'
  	add_column :integrations, :unit_test_passed, :integer
  	add_column :integrations, :unit_test_warning, :integer
  	add_column :integrations, :unit_test_time, :datetime
  	add_column :integrations, :functional_test_passed, :integer
  	add_column :integrations, :functional_test_warning, :integer
  	add_column :integrations, :functional_test_time, :datetime
  end
end
