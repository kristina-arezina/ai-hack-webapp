import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import MainTrain from "./components/Training/Main"
import Main from "./components/Main"

export default class extends Component {
  render() {
      return (
              <Router>
                  <Fragment>
                      <Route exact path="/" render={props => (
                          <React.Fragment >
                            <Header/>
                            <Main/>
                          </React.Fragment>
                      )}/>
                      <Route path="/training" render={props => (
                          <React.Fragment>
                              <MainTrain />
                          </React.Fragment>
                      )}/>
                  </Fragment>
              </Router>
      );
  }
}
