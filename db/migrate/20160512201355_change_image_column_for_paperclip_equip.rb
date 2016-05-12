class ChangeImageColumnForPaperclipEquip < ActiveRecord::Migration
  def up
  	remove_column :equipment, :image
  	add_attachment :equipment, :image
  end

  def down
  	add_column :equipment, :image, :string
  	remove_attachment :equipment, :image
  end
end
