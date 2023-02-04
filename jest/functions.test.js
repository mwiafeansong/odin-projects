const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions');

//capitalize a string
test('capitalize a string', () => {
    expect(capitalize('hello')).toMatch(/Hello/);
});


//reverse a string
test('reverse a string', () => {
    expect(reverseString('hello')).toMatch(/olleh/);
});


//add 
test('add two numbers', () => {
    expect(calculator.add(4, 3.5)).toBe(7.5);
});
test('add two numbers', () => {
    expect(calculator.add('hello', 3)).toMatch(/Inputs should be numbers./);
});
//subtract
test('subtract one number from another', () => {
    expect(calculator.subtract(3, 5)).toBe(-2);
});
test('subtract one number another', () => {
    expect(calculator.subtract(3, 'hello')).toMatch(/Inputs should be numbers/);
});
//divide
test('divide a number by another', () => {
    expect(calculator.divide('hello', 3)).toMatch(/Inputs should be numbers./);
})
test('divide a number by another', () => {
    expect(calculator.divide(20, 0)).toMatch(/Divisor should be greater or equal to 0./);
})
test('divide a number by another', () => {
    expect(calculator.divide(21, 3)).toBe(7);
})
test('divide a number by another', () => {
    expect(calculator.divide(20, 3)).toBe(6.7);
});
//multiply
test('multiply two numbers', () => {
    expect(calculator.multiply('hello', 3)).toMatch(/Inputs should be numbers./);
});
test('multiply two numbers', () => {
    expect(calculator.multiply(3, 0)).toBe(0);
});


// caesar cipher
test('works with single letters', () => {
    expect(caesarCipher('A', 1)).toBe('B');
});
test('works with words', () => {
    expect(caesarCipher('Aaa', 1)).toBe('Bbb');
});
test('works with phrases', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});
test('works with negative shift', () => {
    expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});
test('wraps', () => {
    expect(caesarCipher('Z', 1)).toBe('A');
});
test('works with large shift factors', () => {
    expect(caesarCipher('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});
test('works with large negative shift factors', () => {
    expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});


//analyze array - retruns an oject with average, min, max and length
test('returns average value of the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test('returns minimum value in the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
})
test('returns maximum value in the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
})
test('returns length of the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
})





