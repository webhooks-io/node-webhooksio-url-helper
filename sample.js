var lib = require('./index.js');

var opts = {
    url : "http://requestb.in/s2di4ps2",
    input_id : "IN15fa3b06283747968b7f00f01be0e166",
    proxy_hostname : "localhost:8001"
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