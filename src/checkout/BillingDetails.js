import React from 'react';

const BillingDetails = ({ user }) => {
    const { name, email, line, city, state, postal_code } = user

    return (
        <div>
            <h5>Billing Details Here</h5>
            <table>
            <tbody>
            <tr>
                <td><label htmlFor="email">Email</label></td>
                <td><input name="email" type="text" placeholder="email here" defaultValue={email} /></td>
                </tr>
                <tr>
                <td><label htmlFor="name">Name</label></td>
                <td><input name="name" type="text" placeholder="name here" defaultValue={name} /></td>
                </tr>
                <tr>
                <td><label htmlFor="line">Line</label></td>
                <td><input name="line" type="text" placeholder="address here" defaultValue={line} /></td>
                </tr>
                <tr>
                <td><label htmlFor="city">City</label></td>
                <td><input name="city" type="text" placeholder="city here" defaultValue={city} /></td>
                </tr>
                <tr>
                <td><label htmlFor="state">State</label></td>
                <td><input name="state" type="text" placeholder="state here" defaultValue={state} /></td>
                </tr>
                <tr>
                <td><label htmlFor="postal_code">Zip</label></td>
                <td><input name="postal_code" type="text" placeholder="zip code here" defaultValue={postal_code} /></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
export default BillingDetails;