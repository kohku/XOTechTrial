# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151127234009) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "integrations", force: :cascade do |t|
    t.integer  "change_list"
    t.string   "owner"
    t.datetime "time_started"
    t.boolean  "build"
    t.decimal  "unit_test"
    t.decimal  "functional_test"
    t.string   "status"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.datetime "last_build"
    t.boolean  "debug"
    t.boolean  "release"
    t.integer  "unit_test_passed"
    t.integer  "unit_test_warning"
    t.datetime "unit_test_time"
    t.integer  "functional_test_passed"
    t.integer  "functional_test_warning"
    t.datetime "functional_test_time"
  end

end
