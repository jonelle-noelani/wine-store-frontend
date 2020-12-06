import React, { Component } from 'react';
import BillingDetails from '../checkout/BillingDetails';

class Cart extends Component {
    
    wineTotal = () => {
        let total = this.props.user.wines.map(wine => wine.price * 1)

    //     const total = this.props.user.wines.map(wine => wine.price)
    //     console.log(total)
        return (total.reduce( (a, b) => a + b, 0 )).toFixed(2)
    }


    render() {
        console.log(this.props.user.wines)
        // console.log(this.total)
        console.log(this.props.user)
        console.log(this.wineTotal())
        const userCart = this.props.user.wines.map(wine => (
            <tr key={Math.random}>
                <td>{wine.name}</td>
                <td>${wine.price}</td>
            </tr>
        ))

        return (
            <div>
            
            <table>
                <tbody>
                {userCart}
                <tr>
                <td><h5>TOTAL</h5></td>
                <td>${this.wineTotal()}</td>
                </tr>
                </tbody>
            </table>
            <BillingDetails user={this.props.user} />
            </div>
        )
    }
}
export default Cart;