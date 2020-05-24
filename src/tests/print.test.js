const print = require('../client/js/print');

describe('Test "print" should exist' , () => {
    test('It should return true', async () => {
        expect(print).toBeDefined();
    });
});

describe('Test, the function "handleSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof print).toBe("object");
    });
});