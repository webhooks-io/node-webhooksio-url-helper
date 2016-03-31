var lib = require('./index.js');

var opts = {
    url : "https://user:pass@api.mydomain.com/api/rest?key=0wo9834hp9h3",
    input : "IN9000",
    proxy_hostname : "webhooks.io",
    consumer_id : "92028382020"
};

var result = lib.convert(opts);

console.log(result);

var result = lib.parse(result);

console.log(result);