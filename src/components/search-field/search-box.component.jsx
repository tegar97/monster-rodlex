import React from 'react';

import './search-box.style.css'


export const SearchBox = ({placeHolder,handleChange}) => (
<input className="search" type="search" onChange={handleChange} placeholder={placeHolder}/>
    
)
