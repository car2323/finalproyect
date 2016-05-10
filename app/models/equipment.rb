class Equipment < ActiveRecord::Base
	has_many :rentals
	has_many :maintenances
	belongs_to :user
end
