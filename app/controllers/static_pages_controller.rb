class StaticPagesController < ApplicationController
  # before_action :currently_signed_out

  def root
    @current_user_id = current_user ? current_user.id : -1
  end
end
