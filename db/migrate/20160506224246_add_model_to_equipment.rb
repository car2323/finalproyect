class AddModelToEquipment < ActiveRecord::Migration
  def change
    add_column :equipment, :model, :string
  end
end
