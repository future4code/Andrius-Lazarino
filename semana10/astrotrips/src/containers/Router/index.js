import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ApplicationForm from "../ApplicationForm"
import HomePage from "../HomePage"
import CreateTripPage from "../CreateTripPage"
import ListTripsPage from "../ListTripsPage"
import TripDetailPage from "../TripDetailsPage"





const routes = {
  root: "/",
  applicationForm: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  listTrips: "/trips/list",
  tripDetails: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact patch={routes.root} component={HomePage} />
        <Route exact patch={routes.applicationForm} component={ApplicationForm} />
        <Route exact patch={routes.login} component={LoginPage} />
        <Route exact patch={routes.createTrip} component={CreateTripPage} />
        <Route exact patch={routes.listTrips} component={ListTripsPage} />
        <Route exact patch={routes.tripDetails} component={TripDetailPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
