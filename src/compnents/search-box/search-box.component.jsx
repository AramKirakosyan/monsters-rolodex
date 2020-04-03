import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => {
    return(
        <input 
            className="search"
            placeholder={props.placeholder}
            onChange={props.handleChange}
            type="search"
        />
    )
}