module.exports = function getZerosCount(number, base) {

    var primes = getPrimes(base);

    var power, result = [];
    for (var i = 0; i < primes.length; i++) {

        if (primes[i] != primes[i - 1]) power = 1; // Here, we search how many times particular prime multiplies ifself
        if (primes[i] == primes[i + 1]) { // as a part of number and it will be his power
            power++;

        } else {

            var sum = 0;
            for (var exponent = 1; Math.floor(number / Math.pow(primes[i], exponent)) > 0; exponent++) {
                sum += Math.floor(number / Math.pow(primes[i], exponent));
            }
            result.push(Math.floor(sum / power));
        }
    }
    return Math.min(...result);
}

function getPrimes(base) {
    var arrayOfPrimes = [], remainder = base;
    for (var i = 2; i <= Math.floor(Math.sqrt(base));) {
        if (remainder % i) {
            i++;
        } else {
            arrayOfPrimes.push(i);
            remainder /= i;
        }
    }
    if (remainder != 1) arrayOfPrimes.push(remainder);
    return arrayOfPrimes;
}
