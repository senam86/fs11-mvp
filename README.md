# fs11-mvp

This app seeks to connect african expats together. It is a community app that will be used to share insights of places already visited to give an idea of what someone could get into => the goal is to rate places.

## Setup

Run `yarn` in the project folder to install dependencies related to Express (the server).

`cd client` and run `yarn` install dependencies related to React (the client).

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience.

#### Next features

- join the tables together.
- add a live messaging feature

  # Insights

- when an insight is submitted, the public space will be independant from the form (a new page)
- create dropdown menu in the category input
- add a search bar within the Main Board page that will search insights per category, ratings and also username
- add a notation system in the ratings => give a choice from 1 to 5 (5 being the best notation)
- add comment section for each insight

  ## Userprofile

- add a picture and bio to the user profile
- after creating the profile, clicking submit should send the user to their profile page
- add authentication to the users
- add geolocation for the input 'currentlocation'
