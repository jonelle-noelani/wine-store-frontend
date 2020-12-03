import React from 'react';

class Cart extends React.Component {
    

    wineTotal = () => {
        let total = this.props.user.wines.map(wine => wine.price * 1)

    //     const total = this.props.user.wines.map(wine => wine.price)
    //     console.log(total)
        return (total.reduce( (a, b) => a + b, 0 )).toFixed(2)
    }


    render() {
        console.log(this.props.user.wines)
        // console.log(this.total)
        console.log(this.wineTotal())
        const userCart = this.props.user.wines.map(wine => (
            <tr>
                <td>{wine.name}</td>
                <td>${wine.price}</td>
            </tr>
        ))

        return (
            <table>
                <tbody>
                {userCart}
                <tr>
                <td><h5>TOTAL</h5></td>
                <td>${this.wineTotal()}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default Cart;