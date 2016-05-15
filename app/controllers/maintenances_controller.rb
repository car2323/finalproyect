class MaintenancesController < ApplicationController
    before_action :authenticate_user!
	def show

        one_equipment = Equipment.find(params[:equipment_id])
        one_mainte = one_equipment.maintenances.find(params[:id])
        if one_equipment.user_id != current_user.id
            redirect_to "/"
            return
        end
		if one_mainte.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
	 	render json: one_mainte
	 	# status 201 --> Created  (cree el recurso que querias crear)
	end
    def create
        one_equipment = Equipment.find(params[:equipment_id])
        #  puts ("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        # puts (params[:date])
        # puts ("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        one_mainte = one_equipment.maintenances.new(:name => params[:name], 
        	:description => params[:description], :date => params[:date],
            :price => params[:price])
        if one_mainte.save
           render json: one_mainte, status: 201 
        else
           render json: { error: "One field is empty for CREATE" }, status: 501
        end
    end
	def update
        one_equipment = Equipment.find(params[:equipment_id])
        one_mainte = one_equipment.maintenances.find(params[:id])
		if one_mainte.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
                
        if one_mainte.update(:name => params[:name], 
        	:description => params[:description], :date => params[:date],
            :price => params[:price])
            render json: one_mainte, status: 201 
        else
            render json: { error: "One field is empty for dsafadadasdasdUPDATE" }, status: 501 
        end
    end
    def destroy
        one_equipment = Equipment.find(params[:equipment_id])
        one_mainte = one_equipment.maintenances.find(params[:id])
		if one_mainte.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
        one_mainte.destroy
        render json: one_mainte, status: 201 #201 porque estoy agregando
    end
end
