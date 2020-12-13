import React from 'react';
import { useState } from 'react';
import BillingDetails from '../checkout/BillingDetails';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Cart = ({ user, history }) =>  {

    const wineTotal = () => {
        let total = user.wines.map(wine => wine.price * 1)
        return (total.reduce( (a, b) => a + b, 0 )).toFixed(2)
    }

    const userCart = user.wines.map(wine => (
            <tr key={Math.random()}>
                <td>{wine.name}</td>
                <td>${wine.price}</td>
            </tr>
    ))

    // const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const billingDetails = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: {
              city: e.target.city.value,
              line1: e.target.line.value,
              state: e.target.state.value,
              postal_code: e.target.postal_code.value
            }
          };

            fetch('http://localhost:3000/api/v1/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checkout_user_id: user.id
                }),
            })
            .then(resp => resp.json())
            .then(data => {
                const result = stripe.confirmCardPayment(
                    data.client_secret, {
                        payment_method: {
                            card: cardElement
                        }
                    }
                ).then(resp => {
                    if (resp.error){
                        setCheckoutError(result.error.message)
                    } else if (resp.paymentIntent && resp.paymentIntent.status === 'succeeded'){
                        history.push("/success")
                    }
                })
            })
          
          
            
            const cardElement = elements.getElement('card');

        if (!stripe || !elements) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: billingDetails
        });
        if (error) {
            console.log('[error]', error);
            setCheckoutError(error.message);
            return;
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
        }}

        const cartStyle = {
            alignSelf: "flex-start",
            padding: "60px",
            marginLeft: "10px",
            width: "40%",
            background: "gray",
            float: "left",
            display: "inline-grid",
            height: "80%",
            boxShadow: "3px 4px #00ff00",
        }

        return (
            <div style={{background: '#ffffff'}}>
                <h1>Cart</h1>

            <div style={cartStyle}>
            <table >
                <tbody> 
                {userCart}
                <tr>
                <td><h5>TOTAL</h5></td>
                <td>${wineTotal()}</td>
                </tr>
                </tbody>
            </table>
            </div>

            <div style={cartStyle}>
            <form onSubmit={handleSubmit}>
            <BillingDetails user={user} /> 
          
            <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#ff4dc4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                        iconColor: "#fa755a",
                    },
                    },
                    hidePostalCode: true
                }}
            />
            {checkoutError}
             {/* {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>} */}
            <button type="submit" disabled={!stripe}>Pay</button>
            </form>
            </div>

            </div>
      )
}
export default Cart;