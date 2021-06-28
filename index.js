const server = require('./src/server');
require('dotenv').config();
server.startServer(process.env.PORT || 3001);