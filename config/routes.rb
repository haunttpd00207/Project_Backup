Rails.application.routes.draw do
  root "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :order_comparers, path: Rails.env.production? ? "" : "order-comparer", only: [] do
    get "/index", action: :index
  end

  namespace :api do
    namespace :v1 do
      resources :order_comparers, only: :create
    end
  end
end
