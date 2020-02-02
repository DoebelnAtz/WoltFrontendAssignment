import Styled from 'styled-components';
import { color } from "../../../utils";
import {cursor, font, layout} from "../../../utils/sharedStyles";

export const Restaurant = Styled.div`
    margin: 20px 0;
    color: #000000;
    background-color: ${color.siteBG1}; 
    ${cursor.clickable}
    border-radius 4px;
    ${layout.col}
`;

export const RestaurantName = Styled.div`
    padding: 10px;
    ${font.title};
`;

export const Image = Styled.img`   
    border-radius 4px 4px 0 0;
    width: 100%;
    
`;