function sumRange(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumRange(n - 1)
    }
}

//console.log(sumRange(3));

function power(x, y) {
    if (y === 0) {
        return 1;
    } else {
        return x * (power(x, y - 1));
    }
}

//console.log(power(2, 3))

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * (factorial(n - 1 ));
    }
}

//console.log(factorial(5));

function productOfArray(array) {
    if (array.length === 0) {
        return 1;
    } else {
        return array.pop() * productOfArray(array);
    }
}

// console.log(productOfArray([1, 2, 3, 10]));

function contains(obj, value) {
    for (const key in obj) {
        if (obj[key] === value) {
            return true;
        } 

        if (typeof obj[key] === 'object') {
            return contains(obj[key], value);
        }
    }

    return false;
}

function totalIntegers(array) {
    if (array.length === 0) return 0;

    let total = 0;
    let first = array.shift();

    if (Array.isArray(first)) {
        total += totalIntegers(first);
    } else if (Number.isInteger(first)) {
        total += 1;
    }

    return total + totalIntegers(array);
}

function sumSquares(array) {
    if (array.length === 0) return 0;

    let sum = 0;
    let first = array.shift();

    if (Array.isArray(first)) {
        sum += sumSquares(first);
    } else if (Number.isInteger(first)) {
        sum += first * first;
    }

    return sum + sumSquares(array);
}

// var l = [1, 2, 3];
// console.log(sumSquares(l));

// l = [[1, 2], 3]
// console.log(sumSquares(l));

// l = [[[[[[[[[1]]]]]]]]]
// console.log(sumSquares(l));

function replicate(n, replicant) {
    if (n <= 0){
        return [];
    } 

    return [replicant].concat(replicate(n - 1, replicant))
}

console.log(replicate(7, 5));