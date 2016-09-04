var request = require('request');

module.exports = function(key, secret) {
    var _this = this;
    _this.key = key;
    _this.secret = secret;

    this.verifyCredentials = function(object) {
        if (object.key === undefined || object.secret === undefined) {
            return false;
        }

        if (!object.key || !object.secret) {
            return false;
        }

        return true;
    };

    if (this.verifyCredentials(_this) === false) {
        throw new Error('Credentials Are Incorrect Man!');
    }

    var basic_auth = [_this.key, _this.secret].join(":");
    var base_url = 'https://api.razorpay.com';
    var version = '/v1';

    var api_url = base_url + version;
    var options = {
        headers: {
            authorization: 'Basic ' + new Buffer(basic_auth).toString('base64'),
            'content-type': 'application/json'
        },
        json: true
    };

    this.get = function(resource, qs, callback) {
        options.method = 'GET';
        options.url = api_url + resource;
        options.qs = qs;
        call(callback);
    };

    this.post = function(resource, body, callback) {
        options.method = 'POST';
        options.url = api_url + resource;
        options.body = body;
        call(callback);
    };

    var call = function(callback) {
        request(options, function(err, response, body) {
            if (err) {
                throw new Eror(err);
            }
            if (response.statusCode !== 200) {
                if (body.error.description) {
                    throw new Error(body.error.description);
                } else {
                    throw new Error(response.statusMessage);
                }
            }
            callback(null, body);
        });
    };

    return this;
};
