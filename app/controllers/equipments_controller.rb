class EquipmentsController < ApplicationController
     before_action :authenticate_user!
	def index
      

		 equipments = current_user.equipment.all
        if equipments.length < 1
            render "no_eqipments_page"
            return
        end
        @array_audio=[]
        @array_video=[]
        @array_light=[]
        @array_staging=[]
        @array_itcomputer=[]
	  equipments.each do |equipment|
		 if equipment.category =="AUDIO"
		              
		    @array_audio.push(equipment)           
		              
		 elsif equipment.category =="VIDEO"

		    @array_video.push(equipment)

		 elsif equipment.category =="LIGHT"   

		    @array_light.push(equipment)

		 elsif equipment.category =="STAGING" 

		    @array_staging.push(equipment)
		          
		elsif equipment.category =="ITCOMPUTER"

            @array_itcomputer.push(equipment)
		end   
	  end

        render "index"
	end
	def show#current_user.
        @one_equipment = Equipment.find(params[:id])

		if @one_equipment.nil?
            render "no_eqipments_page"
            return
        end

        if @one_equipment.user_id != current_user.id
            redirect_to "/"
            return
        end

        @maintenances=@one_equipment.maintenances
        @rentals=@one_equipment.rentals
        @totalprice_less_rentals=current_data_rentals(@one_equipment,@rentals)
        @totalprice_plus_maintenances=current_data_maintenances(@one_equipment,@maintenances, @rentals)
        @profit= profit_calculation(@one_equipment, @totalprice_plus_maintenances)
        @running_time_from = running_time(@one_equipment)
        @vartime_now = time_now
		render "show"
	end


    private
	def current_data_maintenances(one_equipment,maintenances, rentals)
       
        totalprice_maintenances = current_data_rentals(one_equipment, rentals)
        maintenances.each do |one_maintenance|
        	totalprice_maintenances=totalprice_maintenances+one_maintenance.price
        end
        return totalprice_maintenances
	end
	def current_data_rentals(one_equipment,rentals)
       
        totalprice_rentals= one_equipment.original_price
        rentals.each do |one_rental|
        	totalprice_rentals=totalprice_rentals-one_rental.total_price
        end
        return totalprice_rentals
	end
	def profit_calculation(one_equipment, totalprice_plus_maintenances)
        profitvar = 0
		if totalprice_plus_maintenances >= 0
           profitvar = 0
		elsif totalprice_plus_maintenances < 0
           profitvar=totalprice_plus_maintenances.abs
        end

      return profitvar
	end
	def running_time(one_equipment)
        running_time_from = (Date.today - one_equipment.purchased_date).to_f
        running_time_from = (running_time_from / 365).round(2)
        return running_time_from
	end
	def time_now
		vartime_now=Date.today
		return vartime_now
	end
end
