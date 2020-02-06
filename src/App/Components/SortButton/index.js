import React, {useRef, useState} from 'react';
import {CurrentSelected, DropDown, SortButton, SortOption} from "./Styles";
import {useDismiss} from "../../../Hooks";
import { capitalizeFirst } from "../../../utils/helpers";

const SortDropDown = ({sortField, setSortField, asc, setAsc}) => {

    const [focus, setFocus] = useState(false);

    const dropDown = useRef();
    const close = () => {
        setFocus(false)
    };

    useDismiss(dropDown, close);

    return (
        <SortButton ref={dropDown}>
            <CurrentSelected focus={focus} onClick={() => {setFocus(true)}}>
                Sort by: {capitalizeFirst(sortField)}
                <button onClick={() => {setAsc(asc * -1);}}>{asc < 0 ? '↓' : '↑'}</button>
            </CurrentSelected>
            <DropDown   focus={focus}>
                <SortOption onClick={() => {setSortField('name'); setFocus(false);}}>Name</SortOption>
                <SortOption onClick={() => {setSortField('tags'); setFocus(false);}}>Tags</SortOption>
                <SortOption onClick={() => {setSortField('description'); setFocus(false);}}>Description</SortOption>
            </DropDown>
        </SortButton>
    )
};

export default SortDropDown