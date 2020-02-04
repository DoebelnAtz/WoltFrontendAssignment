const compare = (num1, num2, asc) => {
    if (num1 < num2) {
        return -1 * asc;
    }
    else if (num1 > num2) {
        return 1 * asc;
    }
    return 0;
};

const compareTags = (tag1, tag2, asc) => {
    if(!tag1.length && !!tag2.length)
        return 1 * asc;
    else if (!!tag1.length && !tag2.length)
        return -1 * asc;
    else {
        if (`${tag1[0] + tag1[1]}` < `${tag2[0] + tag2[1]}`) {
            return -1 * asc;
        }
        else if (`${tag1[0] + tag1[1]}` > `${tag2[0] + tag2[1]}`) {
            return 1 * asc;
        }
    }
    return (0);
};

const partition = (comparisonFunc, arr, start, end, field) => {

    let middle = Math.floor((end + start) / 2);
    let pivot = arr[middle][field];
    let i = start;
    let j = end;

    while (i <= j) {

        while (comparisonFunc(arr[i][field], pivot) < 0) {
            i++;
        }

        while (comparisonFunc(arr[j][field], pivot) > 0) {
            j--;
        }

        if (i <= j) {
            //console.log(arr.map(a => a[field]));
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
};

const quickSort = (comparisonFunc, arr, start=0, end=arr.length - 1, field) => {
    let index;
    let length = arr.length;

    if (length > 1) {
        index = partition(comparisonFunc, arr, start, end, field);

        if (start < index - 1) {
            quickSort(comparisonFunc, arr, start, index - 1, field)
        }
        if (end > index) {
            quickSort(comparisonFunc, arr, index, end, field);
        }
    }

    return arr;
};

const stagingFunc = (arr, field, asc) => {

    // asc is a value 1 / -1 used in the comparison func to switch between asc and desc order

    switch (field) {
        case ('tags'):
            return(quickSort((...args) => compareTags(...args, asc), arr, 0, arr.length - 1, field));
        case('description'):
            return(quickSort((...args) => compare(...args, asc), arr, 0, arr.length - 1, field));
        default:
            return(quickSort((...args) => compare(...args, asc), arr, 0, arr.length-1, field))
    }
};

export default stagingFunc;