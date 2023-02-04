function fib(num) {
    let array = [0, 1];

    if (num <= 0) return null;
    if (num == 1) return [0];
    if (num == 2) return array;
    
    for (let i = 2; i < num; i++) {
        array.push(array[i - 2] + array[i - 1]);    
    }

    return array;
}

//console.log(fib(8));


function fibsRec(num) {
    let array = [0, 1];

    if (num <= 0) return null;
    if (num === 1) return [0];
    if (num === 2) return array;
    
    return [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}

//console.log(fibsRec(8));