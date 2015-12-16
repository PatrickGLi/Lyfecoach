class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def has_user
    if current_user
      flash[:notice] = "You're already signed in!"
      redirect_to root_url
    end
  end

  def no_user
    if current_user.nil?
      flash[:notice] = "You have to sign in!"
      redirect_to new_session_url
    end
  end
end
