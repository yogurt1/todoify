# def indexHtml
#   ActionController::Base.render :template => "index"
# end

Rails.application.routes.draw do

  unless ENV["RUBY_ENV"] === "production"
    mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  end
  
  scope "api" do
    #, defaults: { format: "json" }
    resources :todos
  end
  
  root "frontend#index"
  get "*path", to: "frontend#index"

end
