class Api::FollowsController < ApplicationController
  def index
      @followers = Follow.all.where("organizer_id = ?", params[:user_id])

      render :index
  end

  def create
    @follow = Follow.create!(follow_params)

    render :create
  end

  def destroy
    @follow = Follow.destroy(params[:id])

    render :destroy
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :organizer_id)
  end

  def unfollow_params
    params.require(:unfollow).permit(:follower_id, :organizer_id)
  end

  def fetching
    params[:fetching]
  end
end
