class Maintenance < ActiveRecord::Base
	belongs_to :equipment
	validates :name, :description, :date, :price, presence: true 
end
