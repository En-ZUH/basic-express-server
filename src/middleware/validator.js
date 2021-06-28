'use strict';

module.exports = (request, response, next) => {
    if (request.query.name)
        next();
    if (request.query.name === '') {
        next('error- invalid')
    }
};