class Rental < ActiveRecord::Base
	belongs_to :equipment
	validates :name, :date, :total_price, presence: true 
end
