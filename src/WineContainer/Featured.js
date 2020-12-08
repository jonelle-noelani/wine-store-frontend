import React, { Component } from 'react';

export default class Featured extends Component {
    
    render() {
        return (
            <>
            <h1>Featured Wine</h1>
            <div className="container">
            {/* <h3>Name and Price of Featured Wine</h3> */}

                <div className="featured">
                <img src={this.props.featured.image} alt="wine bottle" style={{justifySelf: "center", width: "40%", height: "auto"}} />
                <h5>{this.props.featured.name}  ${this.props.featured.price}</h5>
                <p>A {this.props.featured.wine_type} from {this.props.featured.region}:</p>
                <p>{this.props.featured.description}</p>
                <button onClick={() => this.props.addToCart(this.props.featured)} className="add button">Add To Cart</button>
                </div>

            </div>
            </>
        )
    }
}