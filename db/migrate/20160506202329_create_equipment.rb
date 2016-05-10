class CreateEquipment < ActiveRecord::Migration
  def change
    create_table :equipment do |t|
      t.references :user, index: true
      #t.integer :user_id
      t.string :name
      t.string :serial
      t.string :brand
      t.date :purchased_date
      t.float :original_price
      t.string :category
      t.string :image

      t.timestamps null: false
    end
  end
end
