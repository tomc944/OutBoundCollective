Rails.application.routes.draw do
  resources :users, only: [:create, :new]
  resources :users, defaults: {format: :json}, only: :show

  resource :session, only: [:create, :new, :destroy]
  resources :current_user, defaults: {format: :json}, only: :index

  namespace :api, defaults: {format: :json} do
    resources :adventures
    resources :images, only: [:create, :show]
  end

  root 'static_pages#root'
end
