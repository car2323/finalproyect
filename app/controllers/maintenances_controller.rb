class MaintenancesController < ApplicationController
	def show
        one_equipment = Equipment.find(params[:equipment_id])
        one_mainte = one_equipment.maintenances.find(params[:id])
		if one_mainte.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
	 	render json: one_mainte
	 	# status 201 --> Created  (cree el recurso que querias crear)
	end
    def create
        one_equipment = Equipment.find(params[:equipment_id])
        one_mainte = one_equipment.maintenances.new(:name => params[:name], 
        	:description => params[:description], :date => params[:date],
            :price => params[:price])
        one_mainte.save
        render json: one_mainte, status: 201 
    end
	def update
        one_equipment = Equipment.find(params[:equipment_id])
        one_mainte = one_equipment.maintenances.find(params[:id])
		if one_mainte.nil?
            render json: { error: "Rentals not found" }, status: 404
            return
        end
                
        one_mainte.update(:name => params[:name], 
        	:description => params[:description], :date => params[:date],
            :price => params[:price])
        render json: one_rental, status: 201 
    end
    def destroy
        one_equipment = Equipment.find(params[:equipment_id])
        one_mainte = one_equipment.maintenances.find(params[:id])
		if one_mainte.nil?
            render json: { error: "Rentals not found" }, status: 404
            return
        end
        one_mainte.destroy
        render json: one_mainte, status: 201 #201 porque estoy agregando
    end
end
