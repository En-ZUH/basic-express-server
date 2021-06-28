'use strict';
require('dotenv').config();

const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');


const app = express();
app.use(express.json());
app.use(logger);

const PORT = process.env.PORT || 3001;

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const { request, response } = require('express');


app.get('/', (req, res) => {
	res.send('Welcome to page2- Enas');
});


app.get('/person', validator, (request, response) => {
	const result = {
		name: request.query.name,
	}
	response.json(result);
});


app.use('*', notFoundHandler);
app.use(errorHandler);

let startServer = () => {
	app.listen(PORT, () => {
		console.log(`server is listening to port ${PORT}`);
	});
};


module.exports = {
	app: app,
	startServer: startServer,
};
