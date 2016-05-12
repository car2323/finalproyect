class RentalsController < ApplicationController
    before_action :authenticate_user!
	def show

        one_equipment = Equipment.find(params[:equipment_id])
        one_rental = one_equipment.rentals.find(params[:id])
        if one_equipment.user_id != current_user.id
            redirect_to "/"
            return
        end
		if one_rental.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
	 	render json: one_rental
	 	# status 201 --> Created  (cree el recurso que querias crear)
	end
    def create
        one_equipment = Equipment.find(params[:equipment_id])
        one_rental = one_equipment.rentals.new(:name => params[:name], :date => params[:date], 
            :total_price => params[:total_price])
        if one_rental.save
           render json: one_rental, status: 201 
        else
          render json: { error: "One field is empty CREATE" }, status: 501
        end
    end
	def update
        one_equipment = Equipment.find(params[:equipment_id])
        one_rental = one_equipment.rentals.find(params[:id])
		if one_rental.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
                
        if one_rental.update(:name => params[:name], 
            :date => params[:date], :total_price => params[:total_price])
            render json: one_rental, status: 201 
        else
          render json: { error: "One field is empty for UPDATE" }, status: 501  
        end
        
    end
    def destroy
        one_equipment = Equipment.find(params[:equipment_id])
        one_rental = one_equipment.rentals.find(params[:id])
		if one_rental.nil?
            render json: { error: "Equipment not found" }, status: 404
            return
        end
        one_rental.destroy
        render json: one_rental, status: 201 #201 porque estoy agregando
    end
end
