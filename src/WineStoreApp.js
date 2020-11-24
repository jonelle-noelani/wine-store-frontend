import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './header/Header'

export default class WineStoreApp extends Component {constructor() {
    super();

    this.state = {
        wines: [],
        featured: []
    }
}

componentDidMount(){
    fetch("http://localhost:3000/api/v1/wines")
    .then(res => res.json())
    .then(wines => this.setState({
        wines: wines,
        featured: wines.find(wine => wine.name === "House of Arras")
    }))
}
    render() {
        console.log(this.state.wines)
        // console.log(this.state.featured)
        return (
            <div className="winestoreapp">
                <Router>
                    <Header />
                    <div className="winecontainer">
                    <AppRouter wines={this.state.wines} featured={this.state.featured} />
                    </div>
                </Router>
            </div>
        )
    }
}