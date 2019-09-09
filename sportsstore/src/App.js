import React, { Component } from 'react';
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { ShopConnector } from "./connectors/ShopConnector";
import { Admin } from "./admin/Admin";
import { AuthProviderImpl } from "./auth/AuthProviderImpl";

export default class App extends Component {

    render() {
        return (
            <Provider store={ SportsStoreDataStore }>
                <AuthProviderImpl>
                    <Router>
                        <Switch>
                            <Route path="/shop" component={ ShopConnector } />
                            <Route path="/admin" component={ Admin } />
                            <Redirect to="/shop" />
                        </Switch>
                    </Router>
                </AuthProviderImpl>
            </Provider>
        )
    }
}
