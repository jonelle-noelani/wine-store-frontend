import React, { Component } from 'react';

export default class Featured extends Component {
    
    render() {
        console.log(this.props.featured.image)
        return (
            <div className="container">
                <h1>Featured Wine</h1>
                <div className="featured"></div>
                <h3>Name and Price of Featured Wine</h3>
                <img src={this.props.featured.image} alt="wine bottle"/>
                <h5>{this.props.featured.name}  ${this.props.featured.price}</h5>
            </div>
        )
    }
}