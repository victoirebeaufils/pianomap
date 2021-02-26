import React, {Suspense, useState, useCallback, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import LoadingSpinner from './components/LoadingSpinner';
import { AuthContext } from './context/auth-context';
/*import NewPlace from "./components/NewPlace";
import UserPlaces from "./components/UserPlaces";
import Home from './components/Home';
import Layout from './components/layout'
*/
const Login = React.lazy(()=>import('./components/Login'));
const User = React.lazy(() =>import('./components/User'));
const Signup = React.lazy(()=>import('./components/Signup'));
const NewPlace = React.lazy(() =>import('./components/NewPlace'));
const Home = React.lazy(() =>import('./components/Home'));
const UserPlaces = React.lazy(() =>import('./components/UserPlaces'));


const App =()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
      console.log("Is logged in");
    routes = (
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
    );
  } else {
    console.log("Is not logged in");
      routes = (
          <Switch>
                 <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/login/">
            <Login/>
        </Route>
        <Route path="/signup">
            <Signup/>
        </Route>
          </Switch>
          
      )
  }
  return(
   <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
    <Suspense fallback={<div className="d-flex justify-content-center align-middle"><LoadingSpinner/></div>}>
        {routes}
        </Suspense>
      </Router>
    </AuthContext.Provider>
  )
}
export default App;