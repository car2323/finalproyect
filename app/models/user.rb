class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
   has_many :equipment
    has_attached_file :image, styles: { thumb: "50x50>" }, default_url: "/images/:style/"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
