// 8 ways to get undefined

//  1 > variable that is not initialized will give undefined

let first;
console.log(first);

//  2 > function with no return

function second (a, b){
    const total = a + b;
}

const result = second();
console.log(result);

//  3 > parameter that is not passed will give you undefined

function third (a, b, c ,d){
    const total = a + b +  c + d;
    console.log(a , b, c , d);
}
 third(5,7);


//  4 >  if return has nothing on the right side will give you undefined

function noNegative (a, b){
    if( a < 0 || b < 0){
        return;
    }
    return a + b ;
}

// const total = noNegative(2,5);
const total = noNegative(2,-5);
console.log(total)


//  5 > property that does not exist on an object, will give you undefined

const fifth  = {
    id : 2,
    name  : 'ponchom',
    age : 20
}

console.log(fifth.id, fifth.name, fifth.age, fifth.profession)

// 6 > accessing array elements outside of the index range

const sixth = [4,89,87,56,54];

console.log(sixth[1], sixth[5], sixth[20], sixth[3]);


//  7 > deleting an element inside in an array

delete sixth[1];

//  the delete word should not be used to delete an element of an array rather should use slice or splice

console.log(sixth);

// 8 > set a value directly to undefined

const eigth = undefined;

console.log(eigth)