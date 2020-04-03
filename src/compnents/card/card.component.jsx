import React from 'react';
import './card.styles.css';

export const Card = (props) =>{ 
    return(
        <div className="card-container">
            <img alt={props.name} src={`https://robohash.org/${props.monsterID}/set=set2&size=180x180`} />
            <h2>{props.name}</h2>
            <p>{props.mail}</p>
        </div>
    )
}