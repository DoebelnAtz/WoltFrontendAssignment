import React, {useRef, useState} from 'react';
import {CurrentSelected, DropDown, SortButton, SortOption} from "./Styles";
import {useDismiss} from "../../../Hooks";
import { capitalizeFirst } from "../../../utils/helpers";

const SortDropDown = ({sortField, setSortField}) => {

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