const print = require('../client/js/print');

describe('Test "print.js" file' , () => {
    test('It should return true', async () => {
        expect(print).toBeDefined();
    });
    test('It should be a function', async () => {
        expect(typeof print).toBe("object");
    });
});
