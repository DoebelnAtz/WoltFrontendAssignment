const compare = (num1, num2) => {
    if (num1 < num2) {
        return -1;
    }
    else if (num1 > num2) {
        return 1;
    }
    return 0;
};

var count = 0;

const partition = (arr, start, end, field) => {
    let middle = Math.floor((end + start) / 2);
    let pivot = arr[middle][field];
    let i = start;
    let j = end;
    while (i <= j) {
        while (arr[i][field] < pivot) {
            i++;
        }
        while (arr[j][field] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
};

const quickSort = (arr, start=0, end=arr.length - 1, field) => {
    let index;
    let length = arr.length;

    if (length > 1) {
        index = partition(arr, start, end, field);

        if (start < index - 1) {
            quickSort(arr, start, index - 1, field)
        }
        if (end > index) {
            quickSort(arr, index, end, field);
        }
    }

    return arr;
};

export default quickSort