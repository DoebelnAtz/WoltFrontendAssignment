import React, { useEffect, useState} from 'react';

import { useRequest } from "../../Hooks";
import RestaurantCard from "../Components/RestaurantCard";
import {Home, RestaurantList} from "./Styles";
import sort from "../../utils/sort";
import SortDropDown from "../Components/SortButton";

function HomePage() {
    const [restaurants, setRestaurants, isLoading] = useRequest('/');
    const [sortField, setSortField] = useState('name');
    const [asc, setAsc] = useState(1);

    useEffect(() => {
        !isLoading && setRestaurants(sort([...restaurants], sortField, asc));
    }, [isLoading, sortField, asc]);

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
            <SortDropDown sortField={sortField} setSortField={setSortField} asc={asc} setAsc={setAsc}/>
            <RestaurantList>
                {!isLoading && renderRestaurants()}
            </RestaurantList>
        </Home>
    );
}

export default HomePage;