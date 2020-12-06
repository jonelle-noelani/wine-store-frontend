import React from 'react';

const BillingDetails = ({ user }) => {
    const { name, email, line, city, state, postal_code } = user

    // const nameField = () => {
    //     name === null? placeholder="name here" : defaultValue={name}
    // }

    // const nameField = (name === null)? placeholder="name here" : defaultValue={name}
    
    // const nameField = () => {
        // console.log("do something")
    //     (name === null)? `placeholder="name here"` : "defaultValue={name}"
    // }

    // function nameField() {
    //     (name === null) ? console.log("do something") : console.log("whyyyyy");
    // }

    // function nameField() {
    //     (name === null) ? input.placeholder="name here" : console.log("whyyyyy");
    // }

    return (
        <div>
            <h5>Billing Details Here</h5>
        <form>
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
                <td><input name="postal_code" type="text" placeholder="postal_code here" defaultValue={postal_code} /></td>
                </tr>
            </tbody>
            </table>
        </form>
        </div>
    )
}
export default BillingDetails;