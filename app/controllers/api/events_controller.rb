class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    event = Event.create!(event_params)
    debugger
    render json: event
  end

  private
  def event_params
    params.require(:event).permit(:location, :title, :start_date,
                                  :price, :view_count, :start_time,
                                  :end_date, :end_time, :ticket_max,
                                  :description, :lat, :lng, :category,
                                  :url, :organizer_id)
  end
end
