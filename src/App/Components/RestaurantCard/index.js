import React from 'react'
import {withRouter} from "react-router-dom";

import {Image, Restaurant, RestaurantName} from "./Styles";

const RestaurantCard = ({restaurant, history}) => {

    return(
        <Restaurant
            onClick={() => history.push(`/${restaurant.name}`)}
        >
            <Image src={restaurant.image} alt={`${restaurant.name} image`}/>
            <RestaurantName>
                {restaurant.name}
            </RestaurantName>
        </Restaurant>
    )
};

export default withRouter(RestaurantCard);