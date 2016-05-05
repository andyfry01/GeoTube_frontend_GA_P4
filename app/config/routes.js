import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from '../components/Home';
import Main from '../components/Main';
import NavContainer from '../containers/NavContainer';
import About from '../components/About';
import FavoritesComponent from '../components/FavoritesComponent';



// How to add in other routes.
// <Route path='/Category' component={CategoryContainer} />
// <Route path='/Frontend' component={FrontendContainer} />
// <Route path='/Backend'  component={BackendContainer} />


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Favorites' component={FavoritesComponent} />
    </Route>
  </Router>
)

export default routes;
