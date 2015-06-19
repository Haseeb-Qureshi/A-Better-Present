module Api
  class CardsController < ApplicationController
    before_action :authenticate_user!

    def create
      @card = current_user.cards.new(card_params)
      if @card.save
        render json: @card
      else
        render json: @card.errors.full_messages, status: 422
      end
    end

    def show
      @card = Card.find(params[:id])
      if @card.user == current_user
        render json: @card.includes(:charities)
      else
        render json: "Not authorized", status: 402
      end
    end

    def update
      @card = Card.find(params[:id])
      if @card.user == current_user && @card.update(card_params)
        render json: @card
      else
        render json: @card.errors.full_messages, status: 422
      end
    end

    def destroy
      card = Card.find(params[:id])
      if card.user == current_user
        render json: card.destroy
      else
        render json: "Not authorized", status: 402
      end
    end

    def slug
      @card = Card.find(params[:id])
      render json: @card.generate_slug
    end

    private

    def card_params
      params.require(:card).permit(
        :design,
        :sender_name,
        :recipient_name,
        :pass,
        :amount,
        :message,
      )
    end
  end
end
