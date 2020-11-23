import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';

export default class WineStoreApp extends Component {
    render() {
        return (
            <div className="winestoreapp">
                <Router>
                    <AppRouter />
                </Router>
            </div>
        )
    }
}