module.exports = function(key, secret) {
    var client = require(__dirname + '/client.js')(key, secret);

    this.getAll = function(options, callback) {
        client.get('/refunds', options, function(err, result) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.items);
        });
    };

    this.getByID = function(refund_id, callback) {
        var resource = '/refunds/' + refund_id;
        client.get(resource, null, callback);
    };

    return this;
};
