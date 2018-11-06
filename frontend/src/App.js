import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBarHome from './navbars/NavBarHome';
import './App.css';
import PetOwnerContainer from './containers/petowners/PetOwnerContainer';
import BusinessContainer from './containers/businesses/BusinessContainer';
import BusinessContainerServiceList from './containers/businesses/BusinessContainerServiceList';
import BusinessContainerBookingList from './containers/businesses/BusinessContainerBookingList';
import BusinessServiceFormContainer from './containers/businesses/BusinessServiceFormContainer';
import SingleBusinessServiceContainer from './containers/businesses/SingleBusinessServiceContainer';
import PetOwnerBookingListContainer from './containers/petowners/PetOwnerBookingListContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBarHome />
        <Switch>
          <Route exact path = '/petowners' component={PetOwnerContainer}/>
          <Route exact path = '/businesses' component={BusinessContainer}/>
          <Route exact path = '/businesses/servicelist' component={BusinessContainerServiceList}/>
          <Route exact path = '/businesses/bookinglist' component={BusinessContainerBookingList}/>
          <Route exact path = '/businesses/createservice' component={BusinessServiceFormContainer}/>
          <Route exact path = '/petowners/bookinglist' component={PetOwnerBookingListContainer}/>
          <Route exact path="/businesses/service/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SingleBusinessServiceContainer id = {id} />
            }}
          />
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
