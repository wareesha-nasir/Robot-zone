import React from 'react';
import "./search.css";
//functional componet do no have access to state and life cycle component
export const SearchBox= ({placeholder,handleChange})=>(
<input className="search"
type="search" placeholder={placeholder}
        onChange={handleChange}
        //,() =>console.log(this.state)
        //setstate is an async func so if want to get state right after it set use second func para 
        />
);



