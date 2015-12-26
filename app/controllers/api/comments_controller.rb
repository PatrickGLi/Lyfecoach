class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where("user_id = ?", params[:user_id])

    render :index
  end

  def create
    comment = Comment.create!(:content => params[:comment][:content], :user_id => params[:user_id])

    render json: comment
  end
end
