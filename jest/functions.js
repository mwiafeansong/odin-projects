// CAPITALIZE A STRING
function capitalize(str) {
    if (/[A-Z]/.test(str.charAt(0))) return str;

    return str
        .charAt(0)
        .toUpperCase() + str.slice(1)
}

//REVERSE A STRING
function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

// CALCULATOR OBJECT with its functions
const calculator = {
    add: function(a, b) {
        if (!Number(a) || !Number(b)) return 'Inputs should be numbers.'; 
        return a + b;  
    },

    subtract: function(a, b) {
        if (!Number(a) || !Number(b)) return 'Inputs should be numbers.';
        return a - b;
    },

    divide: function(a, b) {
        if (!Number.isInteger(a) || !Number.isInteger(b)) return 'Inputs should be numbers.';
        if (b <= 0) return 'Divisor should be greater or equal to 0.';

        let result = a / b;
        if (a % b === 0) return result;
        else return parseFloat(result.toFixed(1));
    },

    multiply: function(a, b) {
        if (Number.isInteger(a) && Number.isInteger(b)) return a * b;

        return 'Inputs should be numbers.';
    }
}

// CAESAR CIPHER
function caesarCipher(str, shift) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i);
        let newIndex = index + shift;
        
        if (index >= 65 && index <= 90) {
            
            if (newIndex > 90) {
                while (newIndex > 90) newIndex = newIndex - 26;
            }
            if (newIndex < 65) {
                while (newIndex < 65) newIndex = newIndex + 26;
            }

            result.push(String.fromCharCode(newIndex));
        } else if (index >= 97 && index <= 122) {

            if (newIndex > 122) {
                while (newIndex > 122) newIndex = newIndex - 26;
            }
            if (newIndex < 97) {
                while (newIndex < 97) newIndex = newIndex + 26;
            }

            result.push(String.fromCharCode(newIndex));
        } else {
            result.push(str[i]);
        }     
    }

    return result.join('');
}


//ANALYZE ARRAY for average, min, max and length
function analyzeArray(array) {
    let average = averageOfArray(array);
    let min = minOfArray(array);
    let max = maxOfArray(array);
    let length = lengthOfArray(array)

    return { average, min, max, length };
}

function averageOfArray(array) {
    let sum = 0
    let length = array.length

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / length;
}

function minOfArray(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }

    return min;
}

function maxOfArray(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }

    return max;
}

function lengthOfArray(array) {
    return array.length;
}

module.exports = { sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray };