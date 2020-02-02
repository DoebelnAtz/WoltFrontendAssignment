import Styled from 'styled-components'
import {color} from "../../utils/sharedStyles";

export const Outside = Styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
`;

export const RestaurantModal = Styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 15%;
    bottom: 45%;
    border: 5px solid ${color.siteBG1};
    background-color: ${color.siteBG};
    border-radius: 2px;
    margin: auto;
`;