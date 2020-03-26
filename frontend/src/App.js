import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import LoadingSpinner from './components/LoadingSpinner';
/*import NewPlace from "./components/NewPlace";
import UserPlaces from "./components/UserPlaces";
import Home from './components/Home';
import Layout from './components/layout'
*/

const User = React.lazy(() =>import('./components/User'));
const NewPlace = React.lazy(() =>import('./components/NewPlace'));
const Home = React.lazy(() =>import('./components/Home'));
const UserPlaces = React.lazy(() =>import('./components/UserPlaces'));

const App =()=>{
  return(
    <Router>
        <Suspense fallback={<div className="center"> <LoadingSpinner/></div>}>
            <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/places/new">
                <NewPlace/>
            </Route>
            <Route exact path="/:userId/">
                <User/>
                </Route>
            <Route path="/:userId/places">
                <UserPlaces/>
            </Route>
        </Switch>
        </Suspense>
        </Router>
  )
}
export default App;