import React from 'react';

function WineCard({ wine, addToCart }){

    return (
        <div className='card align'>
            <img src={wine.image} alt="wine bottle or label" />
            <h5>{wine.name}  ${wine.price}</h5>
            <button onClick={() => addToCart(wine)} className="browser buttons">Add To Cart</button>
        </div>
    )
}
export default WineCard;