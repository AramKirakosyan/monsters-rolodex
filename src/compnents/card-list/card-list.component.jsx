import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return(
        <div className="card-list">
            {props.monsters.map((monster, index) => {
                return(
                    <Card 
                        key={index}
                        monsterID={monster.id}
                        name={monster.name}
                        mail={monster.email}
                    />
                )
            })}
        </div>
    )
}