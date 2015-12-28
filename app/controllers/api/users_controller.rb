class Api::UsersController < ApplicationController

  def show
    if fetchingEvents
      followed_events = User.find(params[:id]).followed_events

      render json: followed_events
    elsif fetchingUser
      followings = User.find(params[:id]).followings

      render json: followings
    else
      @user = User.find(params[:id])

      render :show
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update!(user_params)

    render :show
  end

  private
  def user_params
    params.require(:user).permit(:url, :background_url, :description)
  end

  def fetchingUser
    params[:fetchingUser]
  end

  def fetchingEvents
    params[:fetchingEvents]
  end
end
