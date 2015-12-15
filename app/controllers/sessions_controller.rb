class SessionsController < ApplicationController
  before_action :has_user, only:[:new]
  
  def new
    @user = User.new
  end

  def create
    user = User.find_by_credentials(params[:user][:username],
                                    params[:user][:password]
                                    )

    if user.nil?
      @user = User.new(username: params[:user][:username])
      flash.now[:errors] = ["Invalid username/password"]
      render :new
    else
      login!(user)
      flash[:notice] = "Signed in!"
      redirect_to user_url
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end
