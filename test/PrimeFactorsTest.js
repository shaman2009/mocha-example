import PrimeFactors from '../src/PrimeFactors';
import {
    expect,
    assert
} from 'chai';

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('test generate method', () => {
    const primeFactors = new PrimeFactors();
    it('should return empty when 1', () => {
        expect(primeFactors.generate(1)).to.be.empty;
    });
    it('should return 2 when 2', () => {
        expect(primeFactors.generate(2)).to.deep.equal([2]);
    });
    it('should return 3 when 3', () => {
        expect(primeFactors.generate(3)).to.deep.equal([3]);
    });
    it('should return 2 and 2 when 4', () => {
        expect(primeFactors.generate(4)).to.deep.equal([2, 2]);
    });
    it('should return 2 and 3 when 6', () => {
        expect(primeFactors.generate(6)).to.deep.equal([2, 3]);
    });
    it('should return 2 , 2 and 2 when 8', () => {
        expect(primeFactors.generate(8)).to.deep.equal([2, 2, 2]);
    });
    it('should return 3 and 3 when 9', () => {
        expect(primeFactors.generate(9)).to.deep.equal([3, 3]);
    });
});