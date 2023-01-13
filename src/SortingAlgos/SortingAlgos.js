export function mergeSortAnimated(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const subArray = array.slice();
    mergeSort(array, 0, array.length - 1, subArray, animations);
    return animations;

    function mergeSort(array, start, end, subArray, animations) {
        if (start === end) return;
        const middle = Math.floor((start + end) / 2);
        mergeSort(subArray, start, middle, array, animations);
        mergeSort(subArray, middle + 1, end, array, animations);
        merge(array, start, middle, end, subArray, animations);
    }

    function merge(array, start, middle, end, subArray, animations) {
        let i = start;
        let k = start;
        let j = middle + 1;

        while (i <= middle && j <= end) {
            // Push them once to change their color
            animations.push([i, j]);
            // Push them again to revert their color and make it seem animated
            animations.push([i, j]);
            if (subArray[i] <= subArray[j]) {
                animations.push([k, subArray[i]]);
                array[k++] = subArray[i++];
            } else {
                animations.push([k, subArray[j]]);
                array[k++] = subArray[j++];
            }
        }

        // Similar loop to make sure we didn't miss any element
        while (i <= middle) {
            // Push them once to change their color
            animations.push([i, i]);
            // Push them again to revert their color and make it seem animated
            animations.push([i, i]);
            animations.push([k, subArray[i]]);
            array[k++] = subArray[i++];
        }
        while (j <= end) {
            // Push them once to change their color
            animations.push([j, j]);
            // Push them again to revert their color and make it seem animated
            animations.push([j, j]);
            animations.push([k, subArray[j]]);
            array[k++] = subArray[j++];
        }
    }
}

export function insertionSortAnimated(array) {
    const animations = [];
    var key, j;
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && key < array[j]) {
            animations.push([j + 1, j]);
            animations.push([j + 1, j]);
            animations.push(array[j]);
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push([j + 1, i]);
        animations.push([j + 1, i]);
        animations.push(key);
        array[j + 1] = key;
    }
    return animations;

}

export function bubbleSortAnimated(array) {
    const animations = [];
    var i, j;
    for (i = 0; i < array.length - 1; i++) {
        for (j = 0; j < array.length - i - 1; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                animations.push([array[j], array[j + 1]]);
                animations.swap = [j, j + 1];
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            else {
                animations.push([-1, -1]);
            }
        }
    }
    return animations;
}

export function selectionSortAnimated(array) {

    var i, j, min;
    const animations = [];

    for (i = 0; i < array.length - 1; i++) {

        min = i;

        for (j = i + 1; j < array.length; j++) {
            animations.push([j, min]);
            animations.push([j, min]);
            animations.push([-1, -1]);
            if (array[j] < array[min]) {
                min = j;
            }
        }

        animations.push([i, min]);
        animations.push([i, min]);
        animations.push([array[i], array[min]]);
        var temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return animations;
}

export function heapSortAnimated(array) {

    const animations = [];
    var i;
    var length = array.length;

    for (i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i, animations);
    }


    for (i = length - 1; i > 0; i--) {
        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([array[0], array[i]]);
        var tmp = array[0];
        array[0] = array[i];
        array[i] = tmp;
        heapify(array, i, 0, animations);
    }

    return animations;

    function heapify(array, length, i, animations) {
        var large = i;
        var left = 2 * i + 1;
        var right = 2 * i + 2;

        if (left < length && array[left] > array[large]) {
            large = left;
        }

        if (right < length && array[right] > array[large]) {
            large = right;
        }

        if (large !== i) {
            animations.push([i, large]);
            animations.push([i, large]);
            animations.push([array[i], array[large]]);
            var temp = array[i];
            array[i] = array[large];
            array[large] = temp;
            heapify(array, length, large, animations);
        }

    }
}

export function quickSortAnimated(array) {

    const animations = [];

    quickSort(animations, array, 0, array.length - 1);

    return animations;


    function quickSort(animations, array, low, high) {
        if (low < high) {
            var partition = partitionQuickSort(animations, array, low, high);


            quickSort(animations, array, low, partition - 1);
            quickSort(animations, array, partition + 1, high);
        }
    }

    function partitionQuickSort(animations, array, low, high) {

        var pivotVar = array[high];
        var i = (low - 1);
        var temp;
        for (var j = low; j <= high - 1; j++) {
            if (array[j] < pivotVar) {
                i++;
                animations.push([i, j]);
                animations.push([i, j]);
                animations.push([array[i], array[j]]);
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        animations.push([i + 1, high]);
        animations.push([i + 1, high]);
        animations.push([array[i + 1], array[high]]);
        temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;

        return (i + 1);
    }
}