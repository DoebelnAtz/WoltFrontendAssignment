import React, { useRef } from 'react';
import ReactDOM from 'react-dom'

import {Outside, RestaurantModal, RestaurantTitle} from "./Styles";
import { useDismiss, useRequest } from "../../Hooks";
import {Image} from "../Components/RestaurantCard/Styles";

function RestaurantPage(props) {

    const modal = useRef();

    const [restaurant, , isLoading] = useRequest(props.match.params.restaurantName);
    const close = () => {
        props.history.push('/')
    };

    useDismiss(modal, close);

    return ReactDOM.createPortal(
        <Outside>
            <RestaurantModal ref={modal}>
                <Image src={restaurant?.image} alt={`${isLoading ? 'restaurant' : restaurant?.name}_image`}/>
                {!isLoading &&
                <RestaurantTitle>{restaurant?.name}</RestaurantTitle>
                }
            </RestaurantModal>
        </Outside>,
        document.querySelector('#modal')
    );
}

export default RestaurantPage;