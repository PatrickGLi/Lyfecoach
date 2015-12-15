Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :user, only:[:new, :create, :show]
  resource :session, only:[:new, :create, :destroy]
end
