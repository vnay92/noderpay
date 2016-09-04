# NoderPay
Node.js library for the RazorPay APIs

## Supports
- Orders API
- Payments API
- Refunds API

## Does not support
- Webhooks

## Installing
    npm install [--save] noderpay

## Usage
    var noderpay = require('noderpay');
    var api = noderpay.api('key', 'secret');

    noderpay.verify(function(is_verified) {
        console.log(is_verified);
    });

    // Verify the Keys
    noderpay.verify(function(is_verified) {
        console.log(is_verified);
    });

    /************************
     *       Orders         *
     ***********************/
    // Create a sample Order
    var options = {
        amount: 5000,
        currency: 'INR',
        receipt: 'ASM3214',
        notes: {
            user_id: 69,
            id: 'ASM_69420'
        }
    };

    noderpay.orders.create(options, function(err, response) {
        console.log(response);
    });

    // Get All Orders
    noderpay.orders.getAll(null, function(err, result) {
        console.log(result);
    });

    // Get a Singe Order
    var order_id = 'order_6DyOQKGv7nEnNz';
    noderpay.orders.getByID(order_id, function(err, result) {
        console.log(result);
    });

    // Get all the payments for an order
    noderpay.orders.getPayments(order_id, function(err, result) {
        console.log(result);
    });

    /************************
    *       Payments        *
    ************************/
    // Get all Payments
    noderpay.payments.getAll(null, function(err, result) {
        console.log(result);
    });

    // Get a single pamyent
    var payment_id = 'pay_6E7ZFVB3xFZupb';
    noderpay.payments.getByID(payment_id, function(err, result) {
        console.log(result);
    });

    // Capture a Payment
    var amount = 5000;
    noderpay.payments.capture(payment_id, amount, function(err, result) {
        console.log(result);
    });

    /***********************
    *       Refunds        *
    ***********************/
    // Get all Payments
    noderpay.refunds.getAll(null, function(err, result) {
        console.log(result);
    });

    // Get a single pamyent
    var refund_id = 'pay_6E7ZFVB3xFZupb';
    noderpay.refunds.getByID(refund_id, function(err, result) {
        console.log(result);
    });

## License
Do whatever you want with it. All's good!

## TODO
- Implement promises
- Support Webhooks (?)

## Contributing
A Pull Request would be nice! :)
