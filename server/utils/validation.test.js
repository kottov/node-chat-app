const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString('')).toBeFalsy();
        expect(isRealString(true)).toBeFalsy();
        expect(isRealString(14)).toBeFalsy();
    });

    it('should reject strings with only spaces', () => {
        expect(isRealString(' ')).toBeFalsy();
    });

    it('should allow strings with non-space characters', () => {
        expect(isRealString(' h ')).toBeTruthy();
    });
});