module.exports = function(key, secret) {
    var client = require(__dirname + '/client.js')(key, secret);

    this.getAll = function(options, callback) {
        client.get('/payments', options, function(err, result) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.items);
        });
    };

    this.getByID = function(payment_id, callback) {
        var resource = '/payments/' + payment_id;
        client.get(resource, null, callback);
    };

    this.capture = function(payment_id, amount, callback) {
        var resource = '/payments/' + payment_id + '/capture';
        var body = {
            amount: amount
        };
        client.post(resource, body, callback);
    };

    this.refund = function(payment_id, options, callback) {
        var resource = '/payments/' + payment_id + '/refund';
        client.post(resource, options, callback);
    };

    this.getRefunds = function(payment_id, options, callback) {
        var resource = '/payments/' + payment_id + '/refunds';
        client.get(resource, options, function(err, result) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.items);
        });
    };

    this.getRefundById = function(payment_id, refund_id, options, callback) {
        var resource = '/payments/' + payment_id + '/refunds/' + refund_id;
        client.get(resource, options, callback);
    };

    return this;
};
