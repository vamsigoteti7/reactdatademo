import React, { Component } from 'react';
import './App.css';
import DataContainer from './container/DataContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={DataContainer} />
      </Switch>
    );
    return (
      <div> {routes}</div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
