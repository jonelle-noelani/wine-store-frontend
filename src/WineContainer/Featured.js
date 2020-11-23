import React, { Component } from 'react';

export default class Featured extends Component {
    render() {
        return (
            <div className="container">
                <h1>Featured Wine</h1>
                <div className="featured"></div>
                <h3>Info and Price of Featured Wine</h3>
            </div>
        )
    }
}