# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user_row1=User.create(name: "Carlos1", email: "ccardo29@hotmail.com", password: "carlos123", 
	admin: true, active: true, image: "stringphotolinkuser1")
user_row2=User.create(name: "Pedro2", email: "pedro@hotmail.com", password: "pedro123", 
	admin: true, active: true, image: "stringphotolinkuser2")
user_row3=User.create(name: "Gustavo3", email: "gustavo@hotmail.com", password: "gustavo123", 
	admin: false, active: true, image: "stringphotolinkuser3")

#-----------------------------------------------------------------------------------------------

one_equip_row=user_row1.equipment.create(name: "projector 20k", model: "PTZ201234VE", 
	serial: "00124KJ5-111", brand:"panasonic", purchased_date: Date.today - 800.days, 
	original_price: 56000.00, category: "VIDEO", image: "stringimgequi1"
)

user_row1.equipment.create(name: "projector 4k", model: "H444KHI", 
	serial: "00124KJ5-222", brand:"HITACHI", purchased_date: Date.today - 365.days, 
	original_price: 3500.00, category: "VIDEO", image: "stringimgequi2"
)

user_row1.equipment.create(name: "camera panasonic XP570", model: "PA-XP570", 
	serial: "00124KJ5-333", brand:"panasonic", purchased_date: Date.today - 1500.days, 
	original_price: 35000.00, category: "VIDEO", image: "stringimgequi3"
)

user_row1.equipment.create(name: "Speaker PRX", model: "PRX-612", 
	serial: "00124KJ5-444", brand:"JBL", purchased_date: Date.today - 6000.days, 
	original_price: 650.00, category: "AUDIO", image: "stringimgequi4"
)

user_row1.equipment.create(name: "LEKO", model: "ETC5489-666ETC", 
	serial: "00124KJ5-555", brand:"ETC", purchased_date: Date.today - 100.days, 
	original_price: 400.00, category: "LIGHT", image: "stringimgequi5"
)

user_row1.equipment.create(name: "8x8 stage", model: "St8x8PDTC777", 
	serial: "00124KJ5-666", brand:"stages", purchased_date: Date.today - 800.days, 
	original_price: 1200.00, category: "STAGING", image: "stringimgequi1"
)

user_row1.equipment.create(name: "MacBook Pro", model: "13 inch retina", 
	serial: "00124KJ5-777", brand:"apple mac", purchased_date: Date.today - 20.days, 
	original_price: 1800.00, category: "ITCOMPUTER", image: "stringimgequi1"
)


#-----------------------------------------------------------------------------------------------

 one_equip_row.maintenances.create(name: "New Bracket", description: "Broken bracket ajust 
 	angle during strike show Microsoft", date: Date.today - 20.days, price: 200.00)

 one_equip_row.maintenances.create(name: "Focus Repair", 
 	description: "Repair auto focus projector system", date: Date.today - 150.days, price: 500.00)

#-----------------------------------------------------------------------------------------------

 one_equip_row.rentals.create(name: "Microsoft Conference", 
  	date: Date.today - 22.days, total_price: 2000.00)

 one_equip_row.rentals.create(name: "Express Script", 
  	date: Date.today - 155.days, total_price: 80000.00)















# equip_row1=Equipment.create(user_id: user_row1, name: "projector 20k", model: "PTZ201234VE", 
# 	serial: "00124KJ5-111", brand:"panasonic", purchased_date: Date.today - 800.days, 
# 	original_price: 56000.00, category: "VIDEO", image: "stringimgequi1"
# )

# equip_row2=Equipment.create(user_id: user_row1, name: "projector 4k", model: "H444KHI", 
# 	serial: "00124KJ5-222", brand:"HITACHI", purchased_date: Date.today - 365.days, 
# 	original_price: 3500.00, category: "VIDEO", image: "stringimgequi2"
# )

# equip_row3=Equipment.create(user_id: user_row1, name: "camera panasonic XP570", model: "PA-XP570", 
# 	serial: "00124KJ5-333", brand:"panasonic", purchased_date: Date.today - 1500.days, 
# 	original_price: 35000.00, category: "VIDEO", image: "stringimgequi3"
# )

# equip_row4=Equipment.create(user_id: user_row1, name: "Speaker PRX", model: "PRX-612", 
# 	serial: "00124KJ5-444", brand:"JBL", purchased_date: Date.today - 6000.days, 
# 	original_price: 650.00, category: "AUDIO", image: "stringimgequi4"
# )

# equip_row5=Equipment.create(user_id: user_row1, name: "LEKO", model: "ETC5489-666ETC", 
# 	serial: "00124KJ5-555", brand:"ETC", purchased_date: Date.today - 100.days, 
# 	original_price: 400.00, category: "LIGHT", image: "stringimgequi5"
# )

# equip_row6=Equipment.create(user_id: user_row1, name: "8x8 stage", model: "St8x8PDTC777", 
# 	serial: "00124KJ5-666", brand:"stages", purchased_date: Date.today - 800.days, 
# 	original_price: 1200.00, category: "STAGING", image: "stringimgequi1"
# )

# equip_row7=Equipment.create(user_id: user_row1, name: "MacBook Pro", model: "13 inch retina", 
# 	serial: "00124KJ5-777", brand:"apple mac", purchased_date: Date.today - 20.days, 
# 	original_price: 1800.00, category: "ITCOMPUTER", image: "stringimgequi1"
# )


