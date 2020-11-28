import React from 'react';

function AccountForm()  {

    return (
    <div>
    <form>
        <label htmlFor="email">Email</label> 
        <h5>Display the email but can't change</h5>

        <label htmlFor="password">Password</label>
        <input name="title" type="text"/>
    </form>
    </div>
    )
}

export default AccountForm;