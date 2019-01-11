// Example 1
// var array = ["John", "Bob", "Alice", "Mary"];
// array.sort();

// console.log(array)

//example 2
// var array = [5, 2, 1, 3, 4];
// array.sort();
// console.log(array)


// // Example 3
// var array = [10, 2, 5, 1, 9];
// array.sort(function (a, b) {
//     return a - b
// });



// console.log(array)

var students = [{
        id: 1,
        name: "bruce",
        age: 40
    },
    {
        id: 2,
        name: "zoidberg",
        age: 22
    },
    {
        id: 3,
        name: "alex",
        age: 22
    },
    {
        id: 4,
        name: "alex",
        age: 30
    }
];

var result = students.sort(function (a, b) {
    // arr.sort([compareFunction]) ---> ref from mdn
    if (a.name === b.name) {
        return b.age - a.age
    }
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
})
console.log(result)

//// sort by name (ref to mdn!!! (below))
// items.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }

//     // names must be equal
//     return 0;
//   });