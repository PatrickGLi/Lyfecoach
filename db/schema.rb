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

ActiveRecord::Schema.define(version: 20151215181846) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "title",                                                                                                                                                                                                                                                                               null: false
    t.string   "location",                                                                                                                                                                                                                                                                            null: false
    t.integer  "start_time",                                                                                                                                                                                                                                                                          null: false
    t.integer  "end_time",                                                                                                                                                                                                                                                                            null: false
    t.date     "start_date",                                                                                                                                                                                                                                                                          null: false
    t.date     "end_date",                                                                                                                                                                                                                                                                            null: false
    t.text     "description",                                                                                                                                                                                                                                                                         null: false
    t.integer  "ticket_max",                                                                                                                                                                                                                                                                          null: false
    t.integer  "view_count",   default: 0,                                                                                                                                                                                                                                                            null: false
    t.string   "category",                                                                                                                                                                                                                                                                            null: false
    t.float    "lat",                                                                                                                                                                                                                                                                                 null: false
    t.float    "lng",                                                                                                                                                                                                                                                                                 null: false
    t.float    "price",                                                                                                                                                                                                                                                                               null: false
    t.text     "url",          default: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fpixabay.com%2Fen%2Fsilhouette-sunset-landscape-woman-283298%2F&bvm=bv.110151844,d.cGc&psig=AFQjCNEIkN-4xKzQ4jLYazWlpb_cc6p3ug&ust=1450288362611394", null: false
    t.integer  "organizer_id",                                                                                                                                                                                                                                                                        null: false
    t.datetime "created_at",                                                                                                                                                                                                                                                                          null: false
    t.datetime "updated_at",                                                                                                                                                                                                                                                                          null: false
  end

  add_index "events", ["organizer_id"], name: "index_events_on_organizer_id", using: :btree
  add_index "events", ["title"], name: "index_events_on_title", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                                                                                                        null: false
    t.string   "fname",                                                                                                        null: false
    t.string   "lname",                                                                                                        null: false
    t.string   "password_digest",                                                                                              null: false
    t.string   "session_token",                                                                                                null: false
    t.datetime "created_at",                                                                                                   null: false
    t.datetime "updated_at",                                                                                                   null: false
    t.text     "description"
    t.text     "url",             default: "http://s3.amazonaws.com/wavesforwater/images/avatar-default.gif?sizes=/y:33/x:33"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
