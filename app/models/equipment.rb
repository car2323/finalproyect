class Equipment < ActiveRecord::Base
	has_many :rentals
	has_many :maintenances
	belongs_to :user
	validates :name, :model, :serial, :brand, :purchased_date, :original_price, presence: true 
end
