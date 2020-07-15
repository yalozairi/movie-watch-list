import React from 'react';

//Styles
import {AnasIsDumb} from "../styles"

const SearchBar = ({label, setQuery1, setQuery2, type}) => {
    return (
        <div>
            <AnasIsDumb placeholder={` Search ${label}`} onChange={(event) => type ?setQuery1(event.target.value): setQuery2(event.target.value)}/>
        </div>
    );
};

export default SearchBar;