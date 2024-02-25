function sum (a, b, c){

    console.log(arguments[4])

    const arg = [...arguments];

    // it is the way to convert into an array of an arguments found in only in a function.
    console.log(arg)
    return a + b + c;
}


const total = sum(5,4,6,5,5);

console.log(total);

console.log(sum.length)
// function.length indicates the length number of parameter which is passed in a function


/**
 * arguments
 * 1 > arguments is a array like object
 * 2 > but we cannot push an element there
 */