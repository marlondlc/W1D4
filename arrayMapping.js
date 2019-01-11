var input = [{
        x: 3,
        y: 4
    },
    {
        x: 12,
        y: 5
    },
    {
        x: 8,
        y: 15
    }
];
var result = input.map(function (num1) {
    var calculation = Math.sqrt((Math.pow(num1.x, 2) + Math.pow(num1.y, 2)))
    return calculation
    // x^2 + y^2 = z^2
    // var whatever = Math.sqrt(math.pow)
})
/*var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])*/

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);