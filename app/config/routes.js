import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from '../components/Home';
import Main from '../components/Main';
import NavContainer from '../containers/NavContainer';



// How to add in other routes.
// <Route path='/Category' component={CategoryContainer} />
// <Route path='/Frontend' component={FrontendContainer} />
// <Route path='/Backend'  component={BackendContainer} />


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default routes;
