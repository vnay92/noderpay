module.exports = function(key, secret) {
    var client = require(__dirname + '/client.js')(key, secret);

    this.getAll = function(options, callback) {
        client.get('/orders', options, function(err, result) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.items);
        });
    };

    this.getByID = function(order_id, callback) {
        var resource = '/orders/' + order_id;
        client.get(resource, null, callback);
    };

    this.getPayments = function(order_id, callback) {
        var resource = '/orders/' + order_id + '/payments';
        client.get(resource, null, function(err, result) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.items);
        });
    };

    this.create = function(options, callback) {
        client.post('/orders', options, callback);
    };

    return this;
};
