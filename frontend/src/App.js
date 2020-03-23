import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import NewPlace from "./components/NewPlace";
import UserPlaces from "./components/UserPlaces";
import Home from './components/Home';
import Layout from './components/layout'
import User from './components/User'
const App =()=>{
  return(
    <Router>
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
        
        </Router>
  )
}
export default App;