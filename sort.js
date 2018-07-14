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

sortArr([1, 2, 3, 4, 5, 6, 7, 20, 30, 40, 8, 9])