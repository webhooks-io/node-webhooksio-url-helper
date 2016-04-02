var lib = require('./index.js');

var opts = {
    url : "https://api.mydomain.com/api/rest?key=0wo9834hp9h3",
    input_id : "IN9000",
    proxy_hostname : "gateway.webhooks.io"
};

var result = lib.convert(opts);

console.log(result);

var result = lib.parse(result);

console.log(result);



var opts = {
    url : "https://api.mydomain.com/api/rest?key=0wo9834hp9h3",
    application_id : "AP340sdfnoqwn",
    consumer_id : "sa0924a02ondoh2od",
    bucket_key : "default",
    proxy_hostname : "gateway.webhooks.io"
};

var result = lib.convert(opts);

console.log(result);

var result = lib.parse(result);

console.log(result);