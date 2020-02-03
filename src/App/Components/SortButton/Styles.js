import Styled from 'styled-components';
import {color, colorAdjust, cursor, font, layout} from "../../../utils/sharedStyles";

export const CurrentSelected = Styled.div`
    
    padding: 4px 8px;
    border-radius: 4px 4px ${props => props.focus ? '0 0' : '4px 4px'};
    ${cursor.clickable};
    background-color: ${color.primary};
`;

export const SortButton = Styled.div`
    position: absolute;
    padding: 0px 4px;
    
    width: 200px;
    ${font.default};
    color: #fff;
    max-width: 24vw;
`;

export const DropDown = Styled.div`
    
    padding: 2px 4px;
    background-color: ${color.siteBG1};
    display: ${props => props.focus ? 'block' : 'none'};
    border-radius: 0 0 4px 4px; 
`;

export const SortOption = Styled.div`
    ${layout.row};
    
    ${cursor.clickable};
    padding: 4px 4px;
    transition: background 0.2s;
    color: #fff;
    border-radius: 4px;
    margin: 4px 1px;
    background-color: ${color.primary};
    &:hover {
        background-color: ${colorAdjust.darken(color.primary, 0.2)};
    }
`;