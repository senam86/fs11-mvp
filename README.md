# fs11-mvp

This app seeks to connect expats together. It is a community app that will be used to share insights of places already visited to give an idea of their expat experience.

The app currently has 2 pages :

- Insights
- User profile

Insights table :
Basically, if the user want to share some addresses or events or experiences, they can just fill up the inputs starting with giving a title, a category (food, cultural events, regular meetups, hairdresser, etc); this category will help in case of a search or to classify all insights; depending on what they will describe, they can add a rating that will be defined later. I forgot to add the location input that will also be helpful in a search and classification.

Users table :
The user will fill up the inputs, which are quite standard.

## Setup

Run `yarn` in the project folder to install dependencies related to Express (the server).

`cd client` and run `yarn` install dependencies related to React (the client).

## Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience.

## Next features

### Whole application

- join the tables together.
- add a live messaging feature
- add a Home page

### Component Insights

- when an insight is submitted, the public space will be independant from the form (a new page)
- create dropdown menu in the category input
- add a search bar within the Main Board page that will search insights per category, ratings, location (forgot to add a column location in insights, will do that next) and also username
- add a notation system in the ratings => give a choice from 1 to 5 (5 being the best notation)
- add comment section for each insight

### Component Userprofile

- add a picture and bio to the user profile
- after creating the profile, clicking submit should send the user to their profile page
- add authentication to the users
- add geolocation for the input 'currentlocation'

## Bugs

## Attachments (docs folder)

- API routes
- user table
- insights table

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
