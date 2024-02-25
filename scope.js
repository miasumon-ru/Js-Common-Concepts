
function add (a, b){
    const total = a + b;

    if( b > 5){
        const sum = 25 + a + b;

      
      //   in the same way , if is also a block scope
      }
      else{
      const sum = 5 + a + b;
      var current = sum;
    
          // it is also a block scope
      
      }
      console.log(current);

      return total;

}

// console.log(a, b) not possible because function is block scope





/**
 * 1 > whatever we write in a function is a block scope , for this we can not access any things of function from the outside
 * 2 > block scope is also applicable for if and else and so we can not access from outside
 * 3 > in a easy way , if anythings are found in the second bracket {}, it belongs to block scope
 */


add(5,3)