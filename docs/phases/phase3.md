# Phase 3: Events and Users (2 days)

## Rails
### Models
* Events
* Users

### Views
* users/index.json.jbuilder
* users/show.json.jbuilder
* reviews/index.json.jbuilder

## Flux
### Views (React Components)
* UsersIndex
  - UsersIndexItem
* EventForm
* ReviewsIndex
  - ReviewsIndexItem
* ReviewForm

### Stores
* User
* Review
* Follow

### Actions
* ApiActions.receiveAllUsers
* ApiActions.receiveSingleUser
* ApiActions.receiveAllReviews
* ApiActions.addSingleReview
* ApiActions.receiveUserByFilter
* ApiActions.receiveUserImage
* ApiActions.receiveAllFollowers
* ApiActions.deleteFollower
* ApiActions.addNewEvent

### ApiUtil
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.fetchAllReviews
* ApiUtil.addSingleReview
* ApiUtil.fetchUserByFilter
* ApiUtil.fetchUserImage
* ApiUtil.fetchAllFollowers
* ApiUtil.deleteFollower
* ApiUtil.addNewEvent

## Gems/Libraries
