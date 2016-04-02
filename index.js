var url = require('url');

/**
 * Coverts a URL to a URL that will be passed through.
 * @sync
 * @method convert
 *
 * @param {Object} opts Object that is holding information that will be used to modify the url.
 * @param {String} opts.url The final destination URL
 * @param {String} opts.proxy_hostname The domain that is being proxied to.
 * @param {String} opts.input_id The bucket the request should be proxied through.
 * @param {String} opts.consumer_id The domain that is being proxied to.
 * @param {String} opts.application_id The domain that is being proxied to.
 * @param {String} opts.bucket_key The domain that is being proxied to.
 * @param {Function} callback A function for the callback accepting the following argument 'err, Result'.
 * @example
 *    function(err, Result){}
 */

var convert = function (opts) {
    var local = {};
    // split the url in half using :// as the split location...
    local.url_parts = opts.url.split('://');

    // if the url is to use an input.
    if (opts.input_id) {
        local.proxy_part = opts.proxy_hostname + '/' + opts.input_id + '/';
    } else {
        local.proxy_part = opts.proxy_hostname + '/' + opts.application_id + '/' + opts.consumer_id + '/' + opts.bucket_key + '/';
    }
    // put the domain back together.
    local.final_url = local.url_parts[0] + '://' + local.proxy_part + local.url_parts[1];
    // return
    return local.final_url;
};

/**
 * Coverts a URL to a URL that will be passed through.
 * @sync
 * @method parse
 *
 * @param {String} url Object that is holding information that will be used to modify the url.
 * @param {Function} callback A function for the callback accepting the following argument 'err, Result'.
 * @example
 *    function(err, Result){}
 */

var parse = function (incoming_url) {
    var local = {
        return: {
            type: null,
            input_id: null,
            application_id: null,
            consumer_id: null,
            bucket_key:null,
            destination_url: null
        }
    };

    // process the URL breaking it into the component parts...
    local.url = url.parse(incoming_url);

    //console.log(local.url);

    local.path_parts = local.url.path.split('/');

    local.return.type = local.path_parts[1].substring(0, 2);

    if (local.return.type === 'IN') {
        local.return.input_id = local.path_parts[1];
        local.path_parts.splice(0,2);
    } else if (local.return.type === 'AP') {
        local.return.application_id = local.path_parts[1];
        local.return.consumer_id = local.path_parts[2];
        local.return.bucket_key = local.path_parts[3];
        local.path_parts.splice(0,4);
    } else {

    }


    local.return.destination_url = local.url.protocol + '//' + local.path_parts.join('/');

    return local.return;
};


module.exports = {
    convert: convert,
    parse: parse
};