class EquipmentApiController < ApplicationController
	def show
        one_equipment = Equipment.find(params[:id])
		if one_equipment.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
	 	render json: one_equipment
	 	# status 201 --> Created  (cree el recurso que querias crear)
	end
    def create
        
    end
	def update
        one_equipment = Equipment.find(params[:id])
        if one_equipment.nil?
        	render json: { error: "Equipment not found" }, status: 404
            return
        end
                             #:name, :model, :serial, :brand, :purchased_date, :original_price
        one_equipment.update(:name => params[:name], :model => params[:model], 
            :serial => params[:serial], :brand=> params[:brand], 
            :purchased_date => params[:purchased_date], :original_price => params[:original_price])
        render json: one_equipment, status: 201 #201 porque estoy agregando
    end
    def destroy
        one_equipment = Equipment.find(params[:id])
        if one_equipment.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
        one_equipment.destroy
        render json: one_equipment, status: 201 #201 porque estoy agregando
    end
end
