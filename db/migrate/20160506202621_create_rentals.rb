class CreateRentals < ActiveRecord::Migration
  def change
    create_table :rentals do |t|
      t.references :equipment, index: true
      #t.integer :equipment_id
      t.string :name
      t.date :date
      t.float :total_price

      t.timestamps null: false
    end
  end
end
