class ApplicationController < ActionController::API
  def index
    html = ActionController::Base.render :template => "index"
    render plain: html, content_type: "text/html"
  end
end
