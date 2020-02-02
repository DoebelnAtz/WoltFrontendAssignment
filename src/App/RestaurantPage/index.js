import React, { useRef } from 'react';
import ReactDOM from 'react-dom'

import { Outside, RestaurantModal } from "./Styles";
import { useDismiss, useRequest } from "../../Hooks";

function RestaurantPage(props) {

    const modal = useRef();

    const [restaurant, setRestaurant, isLoading] = useRequest(props.match.params.restaurantName);
    const close = () => {
        props.history.push('/')
    };

    useDismiss(modal, close);

    return ReactDOM.createPortal(
        <Outside>
            <RestaurantModal ref={modal}>
                {!isLoading &&
                    restaurant.name
                }
            </RestaurantModal>
        </Outside>,
        document.querySelector('#modal')
    );
}

export default RestaurantPage;