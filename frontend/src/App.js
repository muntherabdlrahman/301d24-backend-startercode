import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Favorite from './component/Favorite';
import Home from './component/Home';

export class App extends Component {
  render() {
    return (
      <> 
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path ="/favorite">
            <Favorite/>
          </Route>
        </Switch>
      </Router>

        
      </>
    )
  }
}

export default App

