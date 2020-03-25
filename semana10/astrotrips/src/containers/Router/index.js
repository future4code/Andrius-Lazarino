import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ApplicationForm from "../ApplicationForm"
import HomePage from "../HomePage"
import CreateTripPage from "../CreateTripPage"
import ListTripsPage from "../ListTripsPage"
import TripDetailPage from "../TripDetailsPage"





export const routes = {
  root: "/",
  applicationForm: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  listTrips: "/trips/list",
  tripDetails: "/trips/details"
  // Outras rotas aqui
};

const Router = props => {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.applicationForm} component={ApplicationForm} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.createTrip} component={CreateTripPage} />
        <Route exact path={routes.listTrips} component={ListTripsPage} />
        <Route exact path={routes.tripDetails} component={TripDetailPage} />
      </Switch>
    </ConnectedRouter>
  );
};


export default Router;
