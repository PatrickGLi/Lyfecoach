class StaticPagesController < ApplicationController
  before_action :currently_signed_out

  def root
    @current_user_id = current_user.id
  end
end
