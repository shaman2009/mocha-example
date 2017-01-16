import PrimeFactors from '../src/PrimeFactors';
import { expect, assert } from 'chai';

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('primes', () => {
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
});