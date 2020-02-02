import React, { Fragment } from 'react';

import { useRequest } from "../../Hooks";
import RestaurantCard from "../Components/RestaurantCard";
import {Home, RestaurantList} from "./Styles";

function HomePage() {

    const [{restaurants}, setRestaurants, isLoading] = useRequest('/');

    const renderRestaurants = () => {
        return (
            restaurants.map((restaurant, index )=> {
                return (
                    <RestaurantCard restaurant={restaurant} key={index}/>
                )
            })
        )
    };

    return (
        <Home>
            <RestaurantList>
                {!isLoading && renderRestaurants()}
            </RestaurantList>
        </Home>
    );
}

export default HomePage;