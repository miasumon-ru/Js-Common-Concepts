

// const x = false;
// const x = 5;
// const x = -5;
// const x = 0;
// const x = ' ';
// const x = {};
// const x = [];

// // 
// const x = null;
// if(x){
//     console.log('the value of x is truthy');
// }
// else{
//     console.log('the value of y is falsy');
// }


/**
 * Truthy
 * 1 > true
 * 2 > any positive number or negative number except zero (0);
 * 3> any string other than empty string
 *  4 > empty object
 *  5 > empty array
 */

/**
 * falsy values
 *  1 > boolean false
 * 2 > 0 
 * 3 > empty string
 *  4 > undefined
 * 5 > null
 */


// optional || check falsy

const y = '';
if(!y){
    console.log(' value is falsy')
};

// check truthy

// const z = ' ';
const z = 5;
if(!!z){
    console.log('the value is truthy')
}