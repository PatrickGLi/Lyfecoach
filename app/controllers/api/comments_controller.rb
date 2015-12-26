class Api::CommentsController < ApplicationController
  def index

    debugger
    comments = Comment.find_by(user_id: params[:user_id])

    render json: comments
  end

  def create
    comment = Comment.create!(:content => params[:comment][:content], :user_id => params[:user_id])

    render json: comment
  end
end
