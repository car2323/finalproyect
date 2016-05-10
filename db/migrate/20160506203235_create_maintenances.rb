class CreateMaintenances < ActiveRecord::Migration
  def change
    create_table :maintenances do |t|
      t.references :equipment, index: true
      #t.integer :equipment_id
      t.string :name
      t.string :description
      t.date :date
      t.float :price

      t.timestamps null: false
    end
  end
end
