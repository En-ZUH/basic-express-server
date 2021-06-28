'use strict';

module.exports = (error, request, response, next) => {
    const error1 = error.message ? error.message : error;
    response.status(50).json({ error1 });
}