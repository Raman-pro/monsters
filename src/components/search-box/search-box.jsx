import React from "react";

import "./search-box.css"

export const SearchBox = ({placeholder,handlechange}) => (
    <input
        type="search"
        placeholder={placeholder}
        className="search"
        onChange={handlechange}/>
)