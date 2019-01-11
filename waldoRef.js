function findWaldo(arr, found) {
    //arr is the [names, below, in find waldo]
    arr.forEach(function (arr, index) {
        //console.log(name/index ask dom
        if (arr === "Waldo") {
            actionWhenFound(index)
            // actionWhenFound (what arg should you put inside"()" you want to use a local arg like "index")
            //also note the actionWhenFound instead you can use "found(index)" which will be the same result
            //and will allow you to use it globally so that way you dont have to modify it each time
        }
    })
}

function actionWhenFound(index) {
    //index = [2] where waldo is in the arr
    console.log("Waldo was hiding in index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


///side EXample//

/* if (name === 'Waldo'){
    found (position)
    return position;
}else {
    notFound(position);
}
*/