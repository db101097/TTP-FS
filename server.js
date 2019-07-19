'use strict';
//
// server.js
//

const app = require('./app')
let dotenv = require('dotenv').config()
const port = process.env.PORT

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
