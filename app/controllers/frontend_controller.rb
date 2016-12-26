class FrontendController < ActionController::Base
  def index
    render :template => "index"
  end
end
