class Api::FollowsController < ApplicationController
  def index
      followers = Follow.all.where("organizer_id = ?", params[:user_id])

      render json: followers
  end

  def create
    follow = Follow.create!(follow_params)

    render json: follow
  end

  def destroy
    delete = Follow.destroy(params[:id])

    render json: delete
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
