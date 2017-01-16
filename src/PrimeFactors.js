export default class PrimeFactors {
    generate(num) {
        let array = [];
        for (let dividend = 2; num > 1; dividend++)
            for (; num % dividend === 0; num /= dividend)
                array.push(dividend);
        return array;
    }
}