Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only:[:new, :create]
  resource :session, only:[:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :events, only: [:index, :create, :show, :destroy]
    resources :users, only:[:index, :show, :edit, :update] do
      resources :follows, only:[:index, :create, :destroy]
      resources :comments, only:[:index, :create]
    end
  end
end
