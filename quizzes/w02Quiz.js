// -------- Callback Functions -------- //

// Exercise 1 - Create a function 'add', that has two parameters and returns the sum of those two parameters 



// Exercise 2 - Create a function `calculate` that accepts three arguments: 
    // two numbers and a callback function
    // Code the `calculate` function such that it will RETURN the result returned 
    // from invoking the callback function with the two numbers as arguments:



// Exercise 3 - Invoke the 'calculate' function (defined in question #2 above)
    // passing to it these arguments: 20, 15, and the `add` function (defined in question #1 above)
    // and assign the result to a variable called 'solution'




// -------- Classes -------- //

// Exercise 1 - create a 'Mammal' class

// Exercise 2 - set up the constructor for 'Mammal' to have a 'hasFur' property defaulted to true

// Exercise 3 - Give 'Mammal' a 'breathe' method that returns a string 'the air is so refreshing today'

// YOUR SOLUTIONS TO EXERCISES 1 - 3 HERE



// Exercise 4 - Create a 'Human' class that inherits from the 'Mammal' class

// Exercise 5 - Give the 'Human' class a property called name, which is passed in via the constructor

// Exercise 6 - Give the 'Human' class a method called 'speak', which returns the string 'Hello my name is (//The object's name)
// for example, a human with a name of 'Josh' should return 'Hello my name is Josh'

// YOUR SOLUTIONS TO EXERCISE 4 - 6 HERE



// Exercise 7 - Create a human with your name, and assign it to a variable called 'me'



// -------- jQuery -------- //

// Exercise 1 - Assume you have one <ul> which contains multiple <li>s
// write out the jQuery selector function to select the third <li> within the <ul>
// and assign it as a string to a variable called '$li'




// Exercise 2 - Write out the jQuery selector function that selects all of the <li>s in the <ul> theorized above
// and updates each of them to have to say 'we love ice cream'
// and assign it as a string to a variable called '$solution'



// -------- Array Iterator Methods -------- //

// Exercise 3 - BONUS - Using the array.reduce method, find the largest number in the 'numbers' array
// and assign it the variable 'max'
// Bonus means that if you get it correct, you will receive a point
// but you will not lose a point if you get it wrong





// SOLUTION CHECKS --- DO NOT TOUCH


console.log('\nCALLBACK SOLUTIONS \n');
console.log('Exercise 1', add(2, 5));
console.log('Exercise 2', calculate(2, 5, add));
console.log('Exercise 3', solution);
console.log('\nCLASS SOLUTIONS \n');
let mammalCheck = new Mammal();
console.log('Exercise 1', mammalCheck);
console.log('Exercise 2', mammalCheck.hasFur);
console.log('Exercise 3', mammalCheck.breathe());
let humanCheck = new Human('test');
console.log('Exercise 4', humanCheck.breathe());
console.log('Exercise 5', humanCheck.name);
console.log('Exercise 6', humanCheck.speak());
console.log('Exercise 7', me);
console.log('\nJQUERY SOLUTIONS \n');
console.log('Exercise 1', $li);
console.log('Exercise 2', $solution);
console.log('\nArray Iterator Methods \n');
console.log('Exercise 1', max, '\n');

