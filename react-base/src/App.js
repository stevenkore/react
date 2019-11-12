import React from 'react';
import Login from "./components/Login/Login.component";
import { createBrowserHistory } from 'history';
import './App.css';
import { Route, Router, Switch } from "react-router";
import ListingView from "./components/Listing/Listing.component";
import { PrivateRoute } from "./components/utility/PrivateRoute/PrivateRoute";

export const history = createBrowserHistory();

function App() {
    const authenticated = JSON.parse(localStorage.getItem('userToken'));

    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact>
                        <Login/>
                    </Route>
                    <PrivateRoute path="/listing" isAuthenticated={authenticated} component={ListingView} />
                </Switch>
            </Router>
        </div>

    );
}

export default App;
