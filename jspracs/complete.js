// // callback

// function fetchData(url, callback) {
//     setTimeout (()=>{
//         const data = "This is data"
//         callback(dta)

//     }, 5000)
// }


// console.log(" This executes first")


// fetchData('https://example.com', (dta)=>{
//     console.log(dta)
// })



// console.log("This executes second")



/*Introduction
These curly brackets are just nested block scopes. We could write code in them:



*/

{{{var v =42;}}}

console.log(v);




// NB  ALWAYS USE let key word to define variables  BUT only when the variables NEEDS to CHANGE it's value

// declare variables in modern JavaScript is by using the let keyword instead of the var keyword. 
// When defining variables with let, we won’t have this weird out-of-scope access problem.



/* CONST AND WHY you should always use it 

Always use the const keyword to define variables. 
Only use the let keyword when you absolutely need it. Never use the var keyword.



CONST AND ALL THINGS IT

When you use const to define a variable you are instructing the computer to not only label a space in memory but to also NEVER CHANGE that label.
The label will be forever associated with its same space in memory.


E.g

const V = { id: 42 };

// Create a memory unit and label it as V
// This label cannot be discarded or reused

// Later in the program
V = []; // TypeError: Assignment to constant variable.


or 


Note that the constant part here is just the label. The value of what’s in the memory space can still change (if it’s mutable). For example, objects in JavaScript are mutable, so for the V above:

// You can do:
V.id = 37; // No errors

console.log(V.id) // 37

// But you still can't do:
V = { id: 37 }; // TypeError: Assignment to constant variable.
This applies to arrays too (because they are mutable as well).

Strings and Integers are immutable in JavaScript so the only way to change a string or integer value in JavaScript is to discard current memory space and re-label another one. That’s why if you have a numeric counter you need to increment in your program you would need to use let:

// Can't use const for this case:
let counter = 0;
counter = counter + 1; // Discard and re-label
If you need a variable to hold a changing scalar value (like the counter example above) then using let is okay. However, for most other cases it’s probably much better for you to stick with using const for all your variables.



*/






/*ARROW FUNCTIONS AND CLOSURES*/


/*

syntax 
 // The arrow function syntax:
const doSomething = () => {
  // Function Scope
};






*/