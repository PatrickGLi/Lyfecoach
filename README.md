# Lyfecoach

[Live link][link]

[link]: http://www.lyfecoach.io

[![Screenshot](/app/assets/images/screenshot.png)](//github.com/PatrickLi727/Lyfecoach/)

## Minimum Viable Product

Lyfecoach is an event management web application inspired by Eventbrite built
using Ruby on Rails and React.js. Lyfecoach is a means to explore the world,
see what is happening in your city, and expand your horizons. Follow your
favorite organizers, and always know what's going on in your area. Features on
Lyfecoach include:

- [ ] Account creation and Log in
- [ ] Event browsing and event creation using Google Autocomplete
- [ ] Event locating using Google Map API
- [ ] Event filtering by category, date, and price
- [ ] User's followers and user's followings

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Event Model and JSON API (1.5 days)

Using BCrypt, I will implement a basic user authentication system.
Signup will bring us to a basic page containing the app's root React
component. Before building out the front end, I will begin by setting
up a full JSON API for events.

[Details][phase-one]

### Phase 2: Flux Architecture and Event CRUD (2 days)

I will be setting up the React view structure for the main application
using React Router, and I will be using basic bootstrap to organize the
front end as I develop. After the fundamental Flux architecture has been
established, I will implement an Event Store and corresponding API actions
to create the CRUD functionality. I will then create React views for the
events 'Index', 'IndexItem' and 'Form'. I will implement a map for each event
with Google's Map API.

[Details][phase-two]

### Phase 3: Events and Users (3 days)

An event belongs to an organizer, which has its own 'Index' view. I will create
the JSON API for event organizers. Both the organizers and the events can be searched
for, ordered by the popularity of the organizer and the event. Comments can be
read and created. The number of followers an organizer has can be seen, and
an organizer can be followed or unfollowed. Events can be created.

[Details][phase-three]

### Phase 4: User Profile/ Saved Events/ Tickets (2.5 days)

A user has a profile with name, image, cover image, and description. In the nav
bar, the user can view all hosts that are followed, and on the user's profile,
the user can view all users that follow him/her. Events can be removed from the
list here.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (2 days)
  Bootstrap has kept the application organized until now, but in this phase,
the front end of the app comes to life. The database must be seeded with enough
data that the app looks functional.

### Bonus Features (TBD)
- [ ] Improve styling transitions
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
