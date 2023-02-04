function merge(leftArray, rightArray) {
    let result = [];

    let left = 0;
    let right = 0

    while (left < leftArray.length && right < rightArray.length) {
        if (leftArray[left] < rightArray[right]) {
            result.push(leftArray[left]);
            left++;
        } else {
            result.push(rightArray[right]);
            right++;
        }
    }

    while (left < leftArray.length) {
        result.push(leftArray[left]);
        left++;
    }

    while (right < rightArray.length) {
        result.push(rightArray[right]);
        right++;
    }

    return result;
}

function mergeSortRec(array) {
    if (array.length === 0) return null;
    if (array.length === 1) return array;

    let mid = Math.floor(array.length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid, array.length);

    return merge(mergeSortRec(leftArray), mergeSortRec(rightArray))
}

//console.log(mergeSortRec([6, 4, 2, 5, 1, 3]));