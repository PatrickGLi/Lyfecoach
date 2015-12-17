class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
  end

  def create

  end
end
