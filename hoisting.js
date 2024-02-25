
for (var i = 0; i < 5; i++){
    console.log('inside ',i)
}
console.log('outside' ,i);

print5()

// it is possibe because function declaration is hoisted at the top so why function declaration can be called at any place 
function print5 (){
    console.log('inside 5')
}


// but function expression is not hoisted at the top
print10()

// not possible to hoist at the top
// const print10 = function () {
//     console.log('inside 10')
// }
var print10 = function () {

    // in this case , var print only is hoisted , so it returns undefined and undefined can not be a function
    console.log('inside 10')
}

// print10()