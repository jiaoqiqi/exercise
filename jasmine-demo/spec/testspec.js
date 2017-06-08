'use strict';
const test=require('../main/main.js');

describe('main',() => {

    it('main', () => {

        expect(test.main()).toBe('Hello!');
    })
});