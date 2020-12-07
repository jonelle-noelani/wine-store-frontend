import React from 'react';
import { useState } from 'react';
import BillingDetails from '../checkout/BillingDetails';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import styled from "@emotion/styled";
    
// const CardElementContainer = styled.div`
//   height: 40px;
//   display: flex;
//   align-items: center;

//   & .StripeElement {
//     width: 100%;
//     padding: 15px;
//   }
// `;

const Cart = ({ user, onSuccessfulCheckout }) =>  {

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
        // let token = await stripe.createToken({name: 'Name'})

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
        //   setProcessingTo(true);

            fetch('http://localhost:3000/api/v1/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checkout_user_id: user.id
                    // receipt_email: e.target.email.value
                    // token: token.id
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
                )
                if (result.error){
                    setCheckoutError(result.error.message)
                }
                onSuccessfulCheckout();

                // if (result.paymentIntent.status ==='succeeded') {
                //     history.push("/")
                // }
            })
          
          
            
            const cardElement = elements.getElement('card');

        if (!stripe || !elements) {
            return;
        }
        // let response = fetch('/secret').then(function(response) {
        //     return response.json();
        // }).then(function(responseJson){
        //     let clientSecret = responseJson.client_secret;
        // });

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: billingDetails
        });
        if (error) {
            console.log('[error]', error);
            setCheckoutError(error.message);
            // setProcessingTo(false);
            return;
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
        }}

        return (
            <div>
            
            <table>
                <tbody> 
                {userCart}
                <tr>
                <td><h5>TOTAL</h5></td>
                <td>${wineTotal()}</td>
                </tr>
                </tbody>
            </table>

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
      )
}
export default Cart;