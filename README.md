# Final Project - Geotube
## Andy Fry, Sean Keegan

Our project aims to use YouTube's vast API to provide user's with randomly generated videos related to the location they provide.  Videos shown either have location information in the meta data of the video or in the title.  User's can specify a variety of parameters to make their search more unique/interesting, including only streaming live videos if desired.

## Technical Details

On the frontend, we used React and React-router to render components in the DOM.  We utilized react-materialize to style both our nav bar as well as our input fields.  

We make use of  Ruby on Rails for backend functionality.  In the current state of our app, users can click an "Add to favorites" button for any video that is shown.  If said button is clicked, we write the corresponding to our Rails database.  When retrieving all favorited items, an Ajax call is made to our Rails backend to retrieve the data.

## Group member responsibilities/contributions

#### Both:
YouTube API research, designing functionality/user experience,

#### Sean Keegan:
Initial react framework, React Router, implementing react-materialize and other css, Video embedding and component, Google's geo-encoding API, Search Component, About Component

#### Andy Fry:
Rails setup and framework, Backend routes, Google Maps API, Map Component, React-Scroll implementation, Favorites Component
