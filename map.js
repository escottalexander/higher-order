var arr = [1, 5, 10, 13, 15, 20, 33];

var mapped = arr.map(x => x % 5);

console.log(mapped);

var multiplied = arr.map(num => {
    return num = arr.map(x => Math.round(Math.random() * 10) * x);
});

console.log(multiplied);