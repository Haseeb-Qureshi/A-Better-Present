module Api
  class CardDesignsController < ApplicationController
    def show
      render json: CardDesign.find(params[:id])
    end

    def index
      render json: CardDesign.all
    end
  end
end
