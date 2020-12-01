import React from 'react';
import WineCard from './WineCard';

function Browse({wines}) {
    // console.log(wines)
    return (
        <>
        <h1>Browse A Selection of Wines</h1>
      
        <div className="browse grid">
            {wines.map(wine => <WineCard wine={wine} key={wine.id} />)}
        </div>
        </>
    )
}
export default Browse;