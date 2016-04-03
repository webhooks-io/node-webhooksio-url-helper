# Webhooks.io URL Helper

Takes a url and converts it to a dynamic url that can be used as a dynamic destination URL.  This removes the need to setup an explicit destination per endpoint.

Details on how Dynamic Destinations work can be found in our [documenation](http://www.webhooks.io/docs/relay/dynamic-destinations).

``` javascript
// INPUT Sample

// Dynamic URL
https://gateway.webhooks.io/IN9000/api.mydomain.com/api/rest?key=0wo9834hp9h3

// After parsing
{ type: 'IN',
  input_id: 'IN9000',
  application_id: null,
  consumer_id: null,
  bucket_key: null,
  destination_url: 'https://api.mydomain.com/api/rest?key=0wo9834hp9h3' }

// PROVIDER Sample

// Dynamic URL
https://gateway.webhooks.io/AP340sdfnoqwn/sa0924a02ondoh2od/default/api.mydomain.com/api/rest?key=0wo9834hp9h3

// After parsing
{ type: 'AP',
  input_id: null,
  application_id: 'AP340sdfnoqwn',
  consumer_id: 'sa0924a02ondoh2od',
  bucket_key: 'default',
  destination_url: 'https://api.mydomain.com/api/rest?key=0wo9834hp9h3' }


```
