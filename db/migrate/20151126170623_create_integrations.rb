class CreateIntegrations < ActiveRecord::Migration
  def change
    create_table :integrations do |t|
      t.integer :change_list
      t.string :owner
      t.datetime :time_started
      t.boolean :build
      t.decimal :unit_test
      t.decimal :functional_test
      t.string :status

      t.timestamps null: false
    end
  end
end
