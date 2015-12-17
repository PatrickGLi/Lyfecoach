# Schema Information

## events
column name | data type   | details
------------|-------------|-----------------------
id          | integer     | not null, primary key
title       | string      | not null, unique
location    | string      | not null
start_time  | date        | not null
end_time    | date        | not null
description | text        | not null
ticket_max  | integer     | not null
view_count  | integer     | default 0, not null
category    | string      | not null
url         | text        | default (default image), not null
organizer_id| integer     | not null, foreign key (references users), indexed

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
organizer_id| integer   | not null, foreign key (references users), indexed
follower_id | integer   | not null, foreign key (references users), indexed

## users
column name     | data type    | details
----------------|--------------|-----------------------
id              | integer      | not null, primary key
email        | string       | not null, indexed, unique
password_digest | string       | not null
session_token   | string       | not null, indexed, unique
name            | string       |
url             | text         | default (default image)
description     | text         | 

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null
description | text      | not null
event_id    | integer   | not null, foreign key (references events), indexed
organizer_id| integer   | not null, foreign key (references organizers), indexed

## tickets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
price       | integer   | not null
type        | string    | not null, (free ticket, paid ticket, donation)
reserved    | boolean   | not null, default: false
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed
