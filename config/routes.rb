Rails.application.routes.draw do
  scope "/api" do
    resources :todos, defaults: { format: "json" }
  end
  
  root "frontend#index"
  get "*path", to: "frontend#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
