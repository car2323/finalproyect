class Equipment < ActiveRecord::Base
	has_many :rentals
	
	has_many :maintenances

	belongs_to :user

	validates :name, :model, :serial, :brand, :purchased_date, :original_price, presence: true

	has_attached_file :image, styles: { thumb: "50x50>" }, default_url: "/images/:style/"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
