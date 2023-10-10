function isPrime(number) {
    if (number < 2) {
        return false;
    }
    else {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
    }
    return true;
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
for (var index = 0; index < array.length; index++) {
    if (isPrime(array[index])) {
        console.log(array[index] + " is a prime");
    }
    else {
        console.log("".concat(array[index], " is not a prime"));
    }
}
