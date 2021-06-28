'use strict';

// const { response } = require('express');
// const { it } = require('jest-circus');
const validator = require('../src/middleware/validator');

xdescribe('validator', () => {
    it(' returning query name', () => {
        let request = {
            query: {
                name: 'Enas',
            }
        }

        let response = {};
        let next = jest.fn();
        validator(request, response, next)
        expect(next).toHaveBeenCalledWith();
    });

    it('handeling no query', () => {
        let request = {
            query: {
                name: '',
            }
        }

        let response = {};
        let next = jest.fn();
        validator(request, response, next)
        expect(next).toHaveBeenCalledWith('error- invalid');

    })
})