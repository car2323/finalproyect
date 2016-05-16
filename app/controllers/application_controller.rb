class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # def after_sign_in_path_for(resource)
  #        get '/equipments', to: 'equipments#index'
   #end

  before_action :permit_extra_divise_fields, if: :devise_controller?
  protect_from_forgery with: :exception


  protected
    def permit_extra_divise_fields
      permit_array_edit = devise_parameter_sanitizer.for(:account_update)
      permit_array_edit.push( :image)
    	permit_array = devise_parameter_sanitizer.for(:sign_up)
    	permit_array.push( :image, :name)
    end
  
end
