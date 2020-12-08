import React from 'react';
import WineCard from './WineCard';

function Browse({ selectType, selectRegion, wines, type, region, addToCart }) {
    // console.log(wines)

    const selectedType = (type, region) => {
        // console.log(type)
        // console.log(region)
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
            {/* <div className="container"> */}
            <div style={{marginLeft: "50px"}}>
            <select onChange={(e) => selectType(e.target.value)} >
            <option value="all">Browse by Type</option>
            <option value="all">All Types</option>
            <option value="sparkling">Sparkling</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            </select>

            <select  onChange={(e) => selectRegion(e.target.value)} >
            <option value="all">Browse by Region</option>
            <option value="all">All Regions</option>
            <option value="California">California</option>
            <option value="Oregon">Oregon</option>
            <option value="Australia">Australia</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            </select>
            </div>

        <div className="browse grid">
            {selectedType(type, region).map(wine => <WineCard wine={wine} key={wine.id} addToCart={addToCart} />)}
        </div>
        {/* </div> */}
        </>
    )
}
export default Browse;