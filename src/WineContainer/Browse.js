import React from 'react';
import WineCard from './WineCard';

function Browse({ wines, type, region }) {
    console.log(wines)

    const selectType = (type, region) => {
        console.log(type)
        console.log(region)
        if(type === 'all' && region === 'all') {
            // console.log(wines)
            return wines
        }
        // else if(region === 'all') {
        //     console.log(wines)
        // }
        if(type !== 'all' && region === 'all') {
            // console.log(wines.filter(wine => wine.wine_type === type))
            return wines.filter(wine => wine.wine_type === type)
        }
        if(type === 'all' && region !== 'all') {
            // console.log(wines.filter(wine => wine.region === region))
            return wines.filter(wine => wine.region === region)
        }
        else {
            // console.log(wines.filter(wine => (wine.wine_type === type || wine.region === region)))
            // return wines.filter(wine => wine.wine_type === type)
            // console.log(wines.filter(wine => (wine.wine_type === type && wine.region === region)))
            return wines.filter(wine => (wine.wine_type === type && wine.region === region))
        
            
        }
            
    }

    return (
        <>
        <h1>Browse Our Selection of Wines</h1>
            {/* {selectType(type, region)} */}
        <div className="browse grid">
            {selectType(type, region).map(wine => <WineCard wine={wine} key={wine.id} />)}
        </div>
        </>
    )
}
export default Browse;