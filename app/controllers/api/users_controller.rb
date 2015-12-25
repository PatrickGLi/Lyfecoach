class Api::UsersController < ApplicationController
  def index

  end

  def show
    debugger
    if fetching
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

  def fetching
    params[:fetching]
  end
end
