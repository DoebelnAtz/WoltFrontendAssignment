import Styled from 'styled-components';
import { color } from "../../utils";
import {cursor, layout} from "../../utils/sharedStyles";

export const Restaurant = Styled.div`
    margin: 10px 0;
    color: ${color.primary};
    background-color: ${color.siteBG1}; 
    padding: 10px;
    ${cursor.clickable}
    border-radius 4px;
    ${layout.col}
`;

export const Image = Styled.img`
    height: 200px;
    
`;