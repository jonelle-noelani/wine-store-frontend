import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import './index.css';
// import App from './App';
import WineStoreApp from './WineStoreApp'
import reportWebVitals from './reportWebVitals';

import '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// import History for './history';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Elements stripe={stripePromise}>
    <WineStoreApp />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
