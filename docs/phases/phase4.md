# Phase 4: User Profile/ Saved Events/ Tickets (1.5 days)

## Rails
### Models
* Users
* Tickets
* Reviews

### Views
* tickets/index.json.jbuilder
* reviews/index.json.jbuilder
* users/show.json.jbuilder

## Flux
### Views (React Components)
* UsersIndex
  - UsersIndexItem
* TicketsIndex
  - TicketsListItem

### Stores
* User
* Ticket
* Review

### Actions
* ApiActions.receiveAllUsers
* ApiActions.receiveSingleUser
* ApiActions.receiveUserEvents
* ApiActions.deleteUserEvent
* ApiActions.receiveUserTickets
* ApiActions.receiveUserReviews

### ApiUtil
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.fetchUserEvents
* ApiUtil.fetchUserTickets
* ApiUtil.fetchUserReviews
* ApiUtil.deleteUserEvent

## Gems/Libraries
