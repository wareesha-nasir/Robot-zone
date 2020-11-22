import React from 'react';
import {Card} from '../card/card.jsx';
import './card-list-style.css';

//functional component takes props that are paramte
export const CardList= props =>
(<div className="card-list">
     {props.movie.map(movie=>(<Card key={movie.id} movie={movie}/>)          
      )}</div>
);