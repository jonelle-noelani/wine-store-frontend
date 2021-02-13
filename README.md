![Wine Not Shop Logo](/img/shop_logo1.png)

# Wine Not Shop
#### By Jonelle Noelani Yacapin, 21 Dec 2020
#### An e-commerce wine shop.

---

## Technologies Used
* Ruby 2.6.1
* Rails 6.0.3
* React 17.0.1

* PostgresSQL
* JWT 2.2.2
* React-Stripe-JS 1.1.2
* Stripe-JS 1.11.0
* React-Confetti 6.0.0

## Description
A user can create an account with an email and password.  

[![Wine Not Shop YouTube Demo Link](/img/signup.png)](http://www.youtube.com/watch?v=CbYEgGDfWZI "Wine Not Shop YouTube Demo")

Then, they are able to log in and out of the site.  Once logged in, the user can fill out their account info: name, DOB, address, city, state, zip code.  

Currently, the email and password cannot be changed.  Changes can be made to other account info but the current password also needs to be inputed correctly into the form in order to save the changes to the database.

![Account Info](/img/account_info.png)

Click the “Featured Wine” menu button to view the featured wine.

![Featured Wine](/img/featured_wine.png)

Select “Browse” to view all wines.  User can sort the selection by wine type and/or region.  Clicking the “Add To Cart” button will add wines to the cart.  

![Browse Wines](/img/browse_wines.gif)

All items added to cart can be viewed by selecting the “Cart” menu button.  The User can preview all wines before checking out with Stripe by inputing a credit card number, expiry date and cvc.

![Cart and Pay](/img/cart_pay.gif)

## Setup
The codebase is split into a Rails API backend and a React frontend.  Each in their own repository.

*Fork and clone the repository for the backend: https://github.com/jonelle-noelani/wine-store-backend 

*Fork and clone the repository for the frontend:  https://github.com/jonelle-noelani/wine-store-frontend 

*Backend
```
$ cd wine-store-backend/
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails db:seed
$ rails s
```
Rails backend API will be running on http://localhost:3000.

*Frontend
```
$ cd wine-store-frontend/
$ npm install
PORT=4000 npm start
```
This React app will be running on http://localhost:4000.

## Known Bugs/Future Features
* Re-route to Login page if user clicks on Cart menu button without being logged in. 
* Need to have cart emptied after payment successfully processes.
* Need to be able to delete an item from cart before finalizing order.
* Would like user to be able to see past orders in account.
* Have Stripe send an email with summary of the order/payment.
* Add message to “Account Info” form indicating that the current password needs to be entered in order to make changes.  At this time email and password can not be changed from original at setup.

## License
This software is licenced under the [MIT](https://choosealicense.com/licenses/mit/) license.

Copyright (c) 2020 Jonelle Noelani Yacapin

## Contact Information
Jonelle Noelani Yacapin fromwinetocode@gmail.com

## Project Status
A work in progress.  Plans to add features listed under ‘Known Bugs/Future Features’.

## Related Blog
During this project I had to figure out how to display and compute the price of the wine and wrote a blog about the different methods I tried:  
[My Money Problem](https://jonelle-noelani.medium.com/my-money-problem-85c4a0c0b8cb?sk=7eb929b241a7d3d7382728a55e714c03)