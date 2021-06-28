'use strict';

const { beforeEach } = require('jest-circus');
const loggerMiddleware = require('../src/middleware/logger');

describe('logger middleware', () => {
    let consoleSpy;
    const request = {};
    const response = {};
    const next = jest.fn();


    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterEach(() => {
        comsoleSpy.mockRestore();
    })

    it('logs output correctly', () => {
        loggerMiddleware(request, response, next);
        expect(consolSpy).toHaveBeenCalled();
    })

    it('Moving To next Middileware', () => {
        loggerMiddleware(request, response, next);
        expect(next).toHaveBeenCalled();
    })
})