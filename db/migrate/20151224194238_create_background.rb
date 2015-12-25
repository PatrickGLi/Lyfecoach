class CreateBackground < ActiveRecord::Migration
  def change
    create_table :backgrounds do |t|
      add_column :users, :background_url, :text, default: "/v1450772408/photo-1448318440207-ef1893eb8ac0_1_lgb6am.jpg"
    end
  end
end
