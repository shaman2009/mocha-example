'use strict';

import HarryPotter from '../src/HarryPotter';
import {
    expect,
    assert
} from 'chai';





let harryPotter = new HarryPotter();

describe('one type', function () {
    it('the price of one book should be 8', function () {
        expect(harryPotter.calculateBookPrice({ 1: 1 })).to.deep.equal(8);
    });
});

describe('two types', function () {
    it('the price of one book1 and one book2 should be 15.2', function () {
        expect(harryPotter.calculateBookPrice({
            1: 1,
            2: 1,
        })).to.deep.equal(15.2);
    });

    it('the price of two book1 should be 16', function () {
        expect(harryPotter.calculateBookPrice({
            1: 2,
        })).to.deep.equal(16);
    });

    it('the price of two book1 and one book2 should be 23.2', function () {
        expect(harryPotter.calculateBookPrice({
            1: 2,
            2: 1,
        })).to.deep.equal(23.2);
    });
});


describe('three types', function () {

    it('the price of one book1 and one book2 and one book3 should be 21.6', function () {
        expect(harryPotter.calculateBookPrice({
            1: 1,
            2: 1,
            3: 1,
        })).to.deep.equal(21.6);
    });

    it('the price of books with 3,2,1 should be 44.8', function () {
        expect(harryPotter.calculateBookPrice({
            1: 3,
            2: 2,
            3: 1,
        })).to.deep.equal(44.8);
    });

    it('the price of books with 3,2,2 should be 51.2', function () {
        expect(harryPotter.calculateBookPrice({
            1: 3,
            2: 2,
            3: 2,
        })).to.deep.equal(51.2);
    });

    it('the price of books with 3,3,2 should be 58.4', function () {
        expect(harryPotter.calculateBookPrice({
            1: 3,
            2: 3,
            3: 2,
        })).to.deep.equal(58.4);
    });
});


describe('four types', function () {
    it('the price of one book1 and one book2 and one book3 and one book4 should be 25.6', function () {
        expect(harryPotter.calculateBookPrice({
            1: 1,
            2: 1,
            3: 1,
            4: 1,
        })).to.deep.equal(25.6);
    });
});

describe('five types', function () {

    it('the price of five different books should be 30', function () {
        expect(harryPotter.calculateBookPrice({
            1: 1,
            2: 1,
            3: 1,
            4: 1,
            5: 1,
        })).to.deep.equal(30);
    });

    it('the price of five different books should be 100', function () {
        expect(harryPotter.calculateBookPrice({
            1: 5,
            2: 4,
            3: 3,
            4: 2,
            5: 1,
        })).to.deep.equal(100);
    });

    it('the price of five different books should be 51.2', function () {
        expect(harryPotter.calculateBookPrice({
            1: 1,
            2: 1,
            3: 2,
            4: 2,
            5: 2,
        })).to.deep.equal(51.2);
    });

    it('the price of five different books should be 102.4', function () {
        expect(harryPotter.calculateBookPrice({
            1: 2,
            2: 2,
            3: 4,
            4: 4,
            5: 4,
        })).to.deep.equal(102.4);
    });
});
