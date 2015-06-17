module Api
  class CharitiesController < ApplicationController
    def show
      render json: Charity.find(params[:id])
    end

    def index
      render json: Charity.all
    end
  end
end
