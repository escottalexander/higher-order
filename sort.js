function sortArr(arr) {
    console.table(arr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    })
    );
}

sortArr(["a", "g", "b", "f", "c", "e", "d"])

sortArr([1, 2, 3, 4, 5, 6, 7, 20, 30, 40, 8, 9, 22, 27, 400])

sortArr([1, 2, 3, 4, 5, 6, 7, 8, -1, -2, -3, -4, -5, -6, -7, -8])


// Notice how this abbreviated version doesn't yeild a correct result when used on strings. a - b returns NaN. However, this version works perfectly with numbers.
function sortArr2(arr) {
    console.table(arr.sort((a, b) => a - b)
    );
}

sortArr2(["a", "g", "b", "f", "c", "e", "d"])

