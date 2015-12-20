class Api::EventsController < ApplicationController
  def index
    events = Event.all

    if location
      events = Event.near_location(location)
    end

    if price
      events = events.where("price < ?", price)
    end

    if category
      events = events.where("category = ?", category)
    end

    if date
      events = events.where("start_date < ?", date)
    end

    if title
      events = events.where("LOWER(category) LIKE ? OR LOWER(title) LIKE ?",
                            "%#{title.downcase}%", "%#{title.downcase}%")
    end

    @events = events.order(view_count: :desc)
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

  def location
    params[:location]
  end

  def price
    params[:price]
  end

  def category
    params[:category]
  end

  def date
    params[:date]
  end

  def title
    params[:title]
  end
end
