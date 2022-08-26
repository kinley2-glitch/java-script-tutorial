// Let's learn Function

/*
Syntax:
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}
1. Function parameters are listed inside the parentheses () in the function definition.
2. Function arguments are the values received by the function when it is invoked.
3. Inside the function, the arguments (the parameters) behave as local variables.
*/

// Let's create a simple function to add two numbers
function add(a, b) { // function add(a=4, b=3)
    return a + b;    // return sum of a, b 
}

// calls the function add() with parameter 4,3
let x = add(4, 3)
// output = 7
console.log(x)
