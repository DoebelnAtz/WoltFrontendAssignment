import React, {useRef} from 'react';
import ReactDOM from 'react-dom'
import {Outside, RestaurantModal} from "./Styles";
import {useDismiss} from "../../Hooks";

function RestaurantPage(props) {

    const modal = useRef();

    const close = () => {
        props.history.push('/')
    };

    useDismiss(modal, close);

    return ReactDOM.createPortal(
        <Outside>
            <RestaurantModal ref={modal}>
            <button onClick={close}>GO BACK</button>
            {props.match.params.restaurantName}
            </RestaurantModal>
        </Outside>,
        document.querySelector('#modal')
    );
}

export default RestaurantPage;