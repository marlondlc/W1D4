var words = ["ground", "control", "to", "major", "tom"];
//---------------------------//
//dictionary called 1st
// argument2 called within for multiple times as many as number of array length
//-------------------------//
function dictionary(words, theJobToDoOnEachWord) {
    //theJobToDoOnEachWord = fuction in the 2nd arguement
    var array = []
    for (var word of words) {
        array.push(theJobToDoOnEachWord(word))
        //should the function arg be blank?
    }
    console.log(array)
    return array;
    //return needs to be after consol.log because if before you'll be dealing with an empty "Var array"
}

// the below "dictionary" are calling the functions above
//and asking it to run the code"
dictionary(words, function (word) {
    return word.length;
});
// output "length of each word in the array within your VAR Words"
dictionary(words, function (word) {
    return word.toUpperCase();
});
// output "CAPS of each word in the array within your VAR Words"
dictionary(words, function (word) {
    return word.split('').reverse().join('');
});
//