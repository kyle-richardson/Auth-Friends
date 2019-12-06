import React from 'react';
import {Route, Switch} from "react-router-dom"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Home from "./components/Home"
import PrivateRoute from "./PrivateRoute"

function App() {
  return (
    <div className="App">
      <h1>Auth Friends App</h1>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/home" component={Home}/>
        <Route component={Login}/>
      </Switch>
      
    </div>
  );
}

export default App;
