class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where("user_id = ?", params[:user_id])

    render :index
  end

  def create
    @comment = Comment.create!(comment_params)

    render :show
  end

  def comment_params
    params.require(:comment).permit(:user_id, :commenter_id, :content)
  end
end
