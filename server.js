const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const logger = require('./middleware/logger');
const requireAuthentication = require('./middleware/require-Authentication');

app.use(logger);

app.get('/about', requireAuthentication, (req, res) => res.send('About us!'));

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log('Express server started on port: ' + PORT));
