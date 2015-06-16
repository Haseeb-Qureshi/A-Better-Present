Rails.application.routes.draw do
  root "static_pages#home"
  devise_for :users
  namespace :api do
    resources :cards, only: [:create, :update, :destroy]
    resources :card_designs, only: [:show, :index]
  end
end
