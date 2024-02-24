/**
 * In other programming language
 * int a = 5
 * bool c = true
 * string b = "kodu"
 * obj person = {}
 * int [] number
 * string [] friends
 */

// on the other hands, javascript is a dynamic type language

const  a = 5;
const b = 'samsu'
const ages = [45,55]
const student = {

}


/**
 * primitive data types >  five kinds
 * 1 > Number
 * 2 > String
 * 3 > Boolean
 * 4> Null
 *  5 > undefined
 */

/**
 * Non Primitives are two kinds
 * 
 * 1 > Array
 * 2 > Object
 * 
 */


let x = 5;
let y = x;
console.log(x, y);

y = 7 ;

console.log(x, y);

//  notable : primitive data types hold the diffenrent memory to the computer . So though the value of y is changed , the value of x remains same as it was before.


const p = { job : 'web developer'};
let q = p;

console.log(p, q);

q.job = 'backend';
console.log(p, q);

// in the case of non primitive data types ( array and object), if the property of an object is modified without assigning a new one, it does not create a new memory rather it holds the same reference of the same memory . so if i change the property of q, the object "p" is also changed.


