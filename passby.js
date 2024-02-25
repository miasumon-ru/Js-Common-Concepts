let num1 = 5;
let num2 = 7;

function multiply (num1, num2){
    num1 = 27
    const result = num1 * num2;
    return result;
}
console.log(num1)
const output = multiply(num1,num2);
console.log(output)

console.log(num1)


let student1 = {name : 'jalil', partner : 'borsha'}
let student2 = {name : 'raj', partner : 'anika'}

function makeMovie (couple1, couple2 ){
  couple1.name = 'ononto';
  couple2.partner = 'mim'
}

console.log(student1, student2)

makeMovie(student1, student2)

console.log(student1, student2)


/**
 * in case of primitive data
 * 1 > if we change a primitive data inside a function , changed data inside function does not affect outside of data accessed inside function
 * 2 > so primitive types are passed by value
 */

/**
 * in case of non primitive data 
 * 1 > if we change non primitive data ( array and object) inside a function , the change will also be applicable outside the function
 * 2 > because non primitive data are passed by reference
 */