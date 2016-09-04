module.exports.api = function(key, secret) {
    this.payments = require(__dirname + '/payments.js')(key, secret);
    this.orders = require(__dirname + '/orders.js')(key, secret);
    this.refunds = require(__dirname + '/refunds.js')(key, secret);

    this.verify = function(callback) {
        var options = {
            from: parseInt(new Date().getTime() / 1000) - 10,
            to: parseInt(new Date().getTime() / 1000)
        };
        this.payments.getAll(options, function(err, result) {
            if (err) {
                callback(false);
                return;
            }
            callback(true);
        });
    };

    return this;
};
