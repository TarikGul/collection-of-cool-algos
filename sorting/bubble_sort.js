let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

function populateArray() {
    const array = []

    for (let i = 0; i < 100; i++) {
        const random = Math.floor((Math.random() * 100) + 1);
        array.push(random);
    }

    return array
}

const randomArray = populateArray();
console.log(randomArray)
console.log(bubbleSort(randomArray))