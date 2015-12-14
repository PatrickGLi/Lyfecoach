# Schema Information

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, unique
location    | string    | not null
start_time  | date      | not null
end_time    | date      | not null
description | text      | not null
ticket_max  | integer   | not null
view_count  | integer   | default 0
type        | string    |
topic       | string    |
organizer_id| integer   | not null, foreign key (references users), indexed

(start and end time cannot overlap for the same location)

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
organizer_id| integer   | not null, foreign key (references users), indexed
follower_id | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null
description | text      | not null
event_id    | integer   | not null, foreign key (references events), indexed
organizer_id| integer   | not null, foreign key (references organizers), indexed

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image       | image     | not null
event_id    | integer   | foreign key (references events), indexed
user_id     | integer   | foreign key (references users), indexed

Either the event or the user cannot be null.

## tickets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
price       | integer   | not null
type        | string    | not null, (free ticket, paid ticket, donation)
reserved    | boolean   | not null, default: false
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed
