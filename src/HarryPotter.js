'use strict';

const BOOK_PRICE = 8;
const BOOK_DISCOUNT_LIST = {
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75
};


export default class HarryPotter {
    calculateBookPrice(bookList) {
        const fix = { 5: 0, 3: 0 };
        return doCalculate(bookList, fix) - (Math.min(fix[5], fix[3]) * 0.4);
    }
}
function doCalculate(bookList, fix) {
    let bookKeys = Object.keys(bookList);
    let bookNums = 0;
    let cost = bookKeys.length * BOOK_PRICE * BOOK_DISCOUNT_LIST[bookKeys.length];


    for (let key in bookKeys) bookNums += bookList[bookKeys[key]];

    if (bookNums === 0) return 0;
    if (bookKeys.length === 5) fix[5]++;
    if (bookKeys.length === 3) fix[3]++;

    return cost + doCalculate(descDict(bookList), fix);
}

function descDict(bookList) {
    let bookKeys = Object.keys(bookList);
    for (let key in bookKeys) {
        if (bookList[bookKeys[key]] >= 2) {
            bookList[bookKeys[key]]--;
        } else {
            delete bookList[bookKeys[key]];
        }
    }
    return bookList;
}