import React from 'react';


function WineCard({ wine, addToCart }){

    const wineCardAlign = {
        alignSelf: "flex-start",
        padding: "40px",
        margin: "50px",
        width: "250px",
        height: "80%",
        display: "inline-grid",
        boxShadow: "3px 4px #00ff00",
        background: "#FFFFFF",

    }

    return (
        <div className='card align' style={wineCardAlign}>
            <img src={wine.image} alt="wine bottle or label" style={{justifySelf: "center"}} />
            <h5>{wine.name}  ${wine.price}</h5>
            <button onClick={() => addToCart(wine)} className="add button">Add To Cart</button>
        </div>
    )
}
export default WineCard;