class EquipmentApiController < ApplicationController
	def show

        one_equipment = Equipment.find(params[:id])
        if one_equipment.user_id != current_user.id
            redirect_to "/"
            return
        end
		if one_equipment.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
	 	render json: one_equipment
	 	# status 201 --> Created  (cree el recurso que querias crear)
	end
    def create
        one_equipment = current_user.equipment.new(:name => params[:name], :model => params[:model], 
            :serial => params[:serial], :brand=> params[:brand], 
            :purchased_date => params[:purchased_date], 
            :category => params[:category],:original_price => params[:original_price])
        one_equipment.save
        render json: one_equipment, status: 201 
    end
	def update
        one_equipment = Equipment.find(params[:id])
        if one_equipment.nil?
        	render json: { error: "Equipment not found" }, status: 404
            return
        end
                          
        one_equipment.update(:name => params[:name], :model => params[:model], 
            :serial => params[:serial], :brand=> params[:brand], 
            :purchased_date => params[:purchased_date], 
            :category => params[:category],:original_price => params[:original_price])
        render json: one_equipment, status: 201 
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
