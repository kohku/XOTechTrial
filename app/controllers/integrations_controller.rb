class IntegrationsController < ApplicationController
  def index
  	 @integrations = Integration.all

    respond_to do |format|
      format.html #index.html.erb
      format.json { render json: @integrations }
    end
  end
end
