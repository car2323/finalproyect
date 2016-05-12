class ChangeImageColumnForPaperclip < ActiveRecord::Migration
  def up
  	remove_column :users, :image
  	add_attachment :users, :image
  end

  def down
  	add_column :users, :image, :string
  	remove_attachment :users, :image
  end
end
