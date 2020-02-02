import React, {Fragment, useEffect, useState} from 'react';

import { useRequest } from "../../Hooks";
import RestaurantCard from "../Components/RestaurantCard";
import {Home, RestaurantList} from "./Styles";
import quicksort from "../../utils/sort";

function HomePage() {
    const [restaurants, setRestaurants, isLoading] = useRequest('/');
    const [sortField, setSortField] = useState('name');

    useEffect(() => {
        !isLoading && setRestaurants(quicksort([...restaurants], 0, restaurants.length-1, sortField));
    }, [isLoading]);

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