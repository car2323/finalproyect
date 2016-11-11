class EquipmentsController < ApplicationController
     before_action :authenticate_user!
	def index
      

		 equipments = current_user.equipment.all
        if equipments.length < 1
            @vartime_now = time_now
            render "no_eqipments_page"
            return
        end
        @array_audio=[]
        @array_video=[]
        @array_light=[]
        @array_staging=[]
        @array_itcomputer=[]
#================================================================
#to calculate totals
        @total_investment=0
        @total_maintenances_invest=0
        @total_rentals=0

#================================================================
    
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

# to calculate the all investment equipment
#================================================================
      equipment.maintenances.each do |one_maintenance|
          @total_maintenances_invest=@total_maintenances_invest+one_maintenance.price
        end
       @total_investment = @total_investment +  equipment.original_price
       @total_investment = @total_investment + @total_maintenances_invest
       @total_maintenances_invest = 0
	  
#================================================================


# to calculate the all rentals equipment
#================================================================
    equipment.rentals.each do |one_rental|
          @total_rentals=@total_rentals+one_rental.total_price
          @total_rentals.round
        end    
     end
#================================================================
        @vartime_now = time_now
        render "index"
	end
	def show#current_user.
        @one_equipment = current_user.equipment.find(params[:id])

		if @one_equipment.nil?
            render "no_eqipments_page"
            return
        end

        if @one_equipment.user_id != current_user.id
            redirect_to "/"
            return
        end

        maintenances=@one_equipment.maintenances
        #"DESC"
        @maintenances=maintenances.sort {|a,b| b.date <=> a.date}


        rentals=@one_equipment.rentals
        #"DESC"
        @rentals=rentals.sort {|a,b| b.date <=> a.date}


        @totalprice_less_rentals=current_data_rentals(@one_equipment,@rentals)
        @totalprice_plus_maintenances=current_data_maintenances(@one_equipment,@maintenances, @rentals)
        @profit= profit_calculation(@one_equipment, @totalprice_plus_maintenances)


        @running_time_from_days = running_time(@one_equipment)
                                
          
          # puts ("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
          @running_time_from = (@running_time_from_days/ 365)
          auxtimefloat=(@running_time_from_days.to_f / 365)
      
          auxtimefloat = auxtimefloat.modulo(1)
          # puts ("antes")
          # puts (@running_time_from_days)
          # puts (auxtimefloat)
          @running_time_from_days = auxtimefloat * 365
          @running_time_from_days = @running_time_from_days.round
          # puts ("despues")
          # puts (@running_time_from_days)
          # puts (@running_time_from)
          # puts (auxtimefloat)
          # puts ("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
     
       @depretation = straight_linedepreciation(@one_equipment, @running_time_from)


        @vartime_now = time_now
		render "show"
	end


    def update
        @one_equipment = current_user.equipment.find(params[:id])
        if @one_equipment.nil?
            render "no_eqipments_page"
            return
        end
       if params[:equipment] != nil
            if params[:equipment][:image] != nil
                if @one_equipment.update(:image => params[:equipment][:image])
                    redirect_to "/equipments/"+params[:id]
                else 
                    redirect_to "/users/sign_up"
                end 
            end 
        else 
            redirect_to "/equipments/"+params[:id]
        end
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

         #puts ("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
         #puts (one_equipment.purchased_date)
         #puts (one_equipment.purchased_date)
         #puts ("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        running_time_from = (Date.today.mjd - one_equipment.purchased_date.mjd)#.to_f

        return running_time_from
	end
	def time_now
		vartime_now=Date.today
		return vartime_now
	end
  def straight_linedepreciation (one_equipment, running_time)
    salvage = one_equipment.original_price * 0.012
    if one_equipment.category =="AUDIO"
        lifetime = 12;
        if running_time >= lifetime
          depretation = salvage
        else
          depretation = (one_equipment.original_price -  salvage) / lifetime
          depretation = running_time * depretation
          depretation = one_equipment.original_price - depretation
        end
                  
     elsif one_equipment.category =="VIDEO"
       lifetime = 9;
        if running_time >= lifetime
          depretation = salvage
        else
          depretation = (one_equipment.original_price -  salvage) / lifetime
          depretation = running_time * depretation
          depretation = one_equipment.original_price - depretation
        end
     elsif one_equipment.category =="LIGHT"   
        lifetime = 10;
        if running_time >= lifetime
          depretation = salvage
        else
          depretation = (one_equipment.original_price -  salvage) / lifetime
          depretation = running_time * depretation
          depretation = one_equipment.original_price - depretation
        end
     elsif one_equipment.category =="STAGING" 
        lifetime = 12;
        if running_time >= lifetime
          depretation = salvage
        else
          depretation = (one_equipment.original_price -  salvage) / lifetime
          depretation = running_time * depretation
          depretation = one_equipment.original_price - depretation
        end
                             
    elsif one_equipment.category =="ITCOMPUTER"
          lifetime = 4;
        if running_time >= lifetime
          depretation = salvage
        else
          depretation = (one_equipment.original_price -  salvage) / lifetime
          depretation = running_time * depretation
          depretation = one_equipment.original_price - depretation
        end
    end   
       return depretation.round(2)
  end
end







