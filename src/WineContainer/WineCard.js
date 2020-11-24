import React from 'react';

function WineCard({wine}){

    return (
        <div className='card align'>
            <img src={wine.image} alt="wine bottle or label" />
            <h5>{wine.name}  ${wine.price}</h5>
        </div>
    )
}
export default WineCard;