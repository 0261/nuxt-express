require('debugs/init');
const debug = require('debug')('server');
const env = require('dotenv').load();
const express = require('express');
const path = require('path');
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')


const app = express();
const host = env.parsed.HOST || '127.0.0.1';
const port = env.parsed.PORT || 3300;


// Import API Routes
const api = require('./routes/api/api.settings');
app.use('/api', api);

// Import and Set Nuxt.js options
config.dev = !(env.parsed.NODE_ENV === 'production')

// Init Nuxt.js
let nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
debug('Server listening on ' + host + ':' + port);
