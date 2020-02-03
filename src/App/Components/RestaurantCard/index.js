import React from 'react'
import {withRouter} from "react-router-dom";

import {Image, Restaurant, RestaurantDescription, RestaurantName, Tag} from "./Styles";

const RestaurantCard = ({restaurant, history}) => {

    const renderTags = () => {
        return (
            restaurant.tags.map((tag, index) => {
                return (
                    <Tag key={index}>
                        # {tag}
                    </Tag>
                )
            })
        )
    };

    return(
        <Restaurant
            onClick={() => history.push(`/${restaurant.name}`)}
        >
            <Image src={restaurant.image} alt={`${restaurant.name} image`}/>
            <RestaurantName>
                {restaurant.name}
            </RestaurantName>
            <RestaurantDescription>
                {restaurant.description}
            </RestaurantDescription>
            {renderTags()}
        </Restaurant>
    )
};

export default withRouter(RestaurantCard);