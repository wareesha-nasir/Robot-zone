import React from 'react';
import './card.styles.css';

export const Card= props=>(
<div className="card-container">
   <img alt="" src={`https://robohash.org/${props.movie.id}?set=set3&size=100x180`}/>
<i><h2>
{props.movie.name}
      </h2></i> </div>);