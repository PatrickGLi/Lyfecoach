class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    debugger
    @event = Event.new(event_params)
  end

  private
  def event_params
    params.require(:event).permit(:location, :title, :startDate,
                                  :startTime, :endDate, :endTime,
                                  :description, :lat, :lng)
  end
end
