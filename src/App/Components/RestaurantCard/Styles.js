import Styled from 'styled-components';
import { color } from "../../../utils";
import {cursor, font, layout} from "../../../utils/sharedStyles";

export const Restaurant = Styled.div`
    margin: 20px 0;
    color: ${color.primary};
    background-color: ${color.siteBG}; 
    border: 3px solid ${color.siteBG1};
    ${cursor.clickable}
    border-radius 4px;
    
    ${layout.col}
    transition: background 0.2s;
    &:hover {
       background-color: ${color.siteBG1};
    }
`;

export const Image = Styled.img`   
    border-radius 4px 4px 0 0;
    position: relative;
    bottom: 3px;
    right: 3px;
    width: calc(100% + 6px);
`;

export const RestaurantName = Styled.div`
    padding: 10px;
    ${font.title};
`;

export const RestaurantDescription = Styled.div`
    font-size: 2vw;
    padding: 10px;
    ${font.default};
    
`;

export const Tag = Styled.div`
    background-color: ${color.primary};
    padding: 4px 4px;
    margin: 2px 6px;
    border-radius: 4px;
    ${font.default};
    color: #ffffff;
`;
