class SessionsController < Devise::SessionsController

	def after_sign_in_path_for(resource)
		'/equipments'
	end
end
