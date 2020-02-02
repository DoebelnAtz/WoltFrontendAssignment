import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./HomePage";
import RestaurantPage from "./RestaurantPage";

function App() {


    return (
        <BrowserRouter>
                <Route
                    path={'/'}
                    render={props => <HomePage {...props}/>}
                />
                <Route
                    exact
                    path={'/:restaurantName'}
                    render={props => <RestaurantPage {...props}/>}
                />

        </BrowserRouter>
    );
}

export default App;