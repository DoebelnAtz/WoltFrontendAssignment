import React from 'react'
import {withRouter} from "react-router-dom";

import {Image, Restaurant} from "./Styles";

const RestaurantCard = ({restaurant, index, history}) => {
    console.log(restaurant);
    return(
        <Restaurant
            key={index}
            onClick={() => history.push(`/${restaurant.name}`)}
        >
            <Image src={restaurant.image} alt={`${restaurant.name} image`}/>
            {restaurant.name}
        </Restaurant>
    )
};

export default withRouter(RestaurantCard);