import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk"

import HomePg from "./components/HomePgContainer"
import TopNav from "./components/TopNav"
import ListPg from "./components/ListPgContainer"
import DetailPg from "./components/DetailPgContainer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


class App extends Component {
  


  render() {
    return (
      <div className="App">
        < TopNav />
        <Switch>
          < Route exact path="/" render={() => <Redirect to="/home"/>}/>
          < Route exact path="/home" component={HomePg}/>
          < Route exact path="/list" component={ListPg}/>
          < Route exact path="/list/:id" render={(props) => {
            let softwareID = props.match.params.id 
              return < Show softwareId={softwareID}/>
          }}/>

        </Switch>
      </div>
    )


  }

}

export default app