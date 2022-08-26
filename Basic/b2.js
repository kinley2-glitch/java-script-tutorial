// Let's talk about Variables and Types

/* Variables
In JavaScript every variable is defined using the var keyword, let, const, or nothing, and it can 
contain all type of variables.

While defining variables, you can either use:
1. var        : allows the change of variable value and if you want your code to run in older browser, you must use var!
2. const & let: don't allows the variable value change

The general rules for constructing names for variables (unique identifiers) are:
1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter
3. Names can also begin with $ and _ (but we will not use it in this tutorial)
4. Names are case sensitive (y and Y are different variables)
5. Reserved words (like JavaScript keywords) cannot be used as names

Note:
1. JavaScript identifiers are case-sensitive.

Type of data types includes:
1. number : it can either be a integer or floating type value
2. string : anything between '' or ""
3. boolean: true or false
4. array  : []
5. object : ()
*/

let myNumber = 3;       // a number
let myBoolean = true;   // a boolean
let myString = 'Kinley' // a string
let myArray = [];       // an array
let myObject = {};      // an object

// You can declare many variables in one statement.
let person = "You", age = 20, place = 'Bhutan';

// Value = undefined
let car;

/* JavaScript Arithmetic
1. + : addtion
2. - : subtraction
3. * : multiplication
4. **: exponentiation
5. / : division
6. % : modulus
7. ++: increment
8. --: decrement
*/
let x = 5 + 2 * 3;              // 11
let y = "Tom" + " & " + "Jerry" // Tom & Jerry
let z = "5" + 1 - 3;            // 48
let a = 2 + 3 + "5" + "A";      // 55A

// JavaScript $: The dollar sign is treated as a letter in JavaScript names.
let $ = "Hello"
let $$$ = 2;
let $money = 5;

/*
JavaScript comparison operators:
1. == : equal to
2. ===: equal value and equal to
3. != : not equal
4. !==: not equal value or not equal type
5. >  : greater than
6. <  : less than
7. >= : greater than or equal to
8. <= : less than or equal to 
9. ?  : ternary operator

JavaScript logical operators:
1. && : logical and
2. || : logical or
3. !  : logical not

JavaScript type operators:
1. typeof     : return the type of a variable
2. instanceof : return true if an object is an instance of an object type

JavaScript bitwise operators:
1. &  : AND
2. |  : OR
3. -  : NOT
4. ^  : XOR
5. << : left shift
6. >> : right shit
7. >>>: unsigned right shift
*/
console.log('You did, great!. We will learn function in next tutorial!')



