Rails.application.routes.draw do
  root "static_pages#home"
  devise_for :users
  namespace :api do
    resources :cards, only: [:create, :update, :destroy, :show]
    resources :card_designs, only: [:show, :index]
    resources :charities, only: [:show, :index]
    get "slugtest/:id" => "cards#slug"
  end
end
