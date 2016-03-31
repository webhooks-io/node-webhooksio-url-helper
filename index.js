var url = require('url');

/**
 * Coverts a URL to a URL that will be passed through.
 * @sync
 * @method convert
 *
 * @param {Object} opts Object that is holding information that will be used to modify the url.
 * @param {String} opts.url The final destination URL
 * @param {String} opts.input The bucket the request should be proxied through.
 * @param {String} opts.proxy_hostname The domain that is being proxied to.
 * @param {String} opts.consumer_id The domain that is being proxied to.
 * @param {Function} callback A function for the callback accepting the following argument 'err, Result'.
 * @example
 *    function(err, Result){}
 */

var convert = function (opts) {
    var local = {};

    // process the URL breaking it into the component parts...
    local.url = url.parse(opts.url);

    local.return = local.url.protocol + '//';

    if (local.url.auth.length) {
        local.return = local.return + local.url.auth + '@';
    }
    // add the
    local.return = local.return + local.url.hostname.replace(/\./g, '-') + '-' + opts.input + '.' + opts.proxy_hostname;

    // if there is a port being used, append it to the url...
    if (local.url.port) {
        local.return = local.return + ':' + local.url.port;
    }
    // if the proxy requires a special path in the url, add it...
    local.return = local.return + '/consumer/' + opts.consumer_id;
    // add the path and query string back to the return url...
    if (local.url.path) {
        local.return = local.return + local.url.path;
    }

    // return the new domain...
    return local.return;
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
    var local = {};

    // process the URL breaking it into the component parts...
    local.url = url.parse(incoming_url);

    //extract the actual hostname;
    local.org_hostname = local.url.hostname.split('-');

    local.webhooks_subdomain = local.org_hostname[local.org_hostname.length-1].split('.')[0];

    local.org_hostname.splice(local.org_hostname.length-1, 1);

    local.target_hostname = local.org_hostname.join('.');

    local.url.hostname = local.target_hostname;
    local.url.host = local.target_hostname;

    local.target_pathname = local.url.pathname.split('/');

    local.consumer_id = local.target_pathname[2];

    local.target_pathname.splice(0, 3);

    local.url.pathname = '/' + local.target_pathname.join('/');

    local.url.path = local.url.pathname + '?' + local.url.query;

    local.return = {
        target_url : local.url.format(local.url),
        consumer_id : local.consumer_id,
        subdomain : local.webhooks_subdomain
    };

    // return the new domain...
    return local.return;
};


module.exports = {
    convert: convert,
    parse: parse
};