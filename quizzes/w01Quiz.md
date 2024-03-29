# `SEIR` Week 1 Assessment
## NAME: ____________________ &nbsp; &nbsp; &nbsp; &nbsp; _______ of 19

### Bash/Zsh (Terminal)

#### For EACH and EVERY question in this section, assume you are in the `~/fridge` directory, and send the correct commands:

1. Make two directories inside `~/fridge`: `vegetables` and `cakes`:
<br><br>
```mkdir vegetables cakes```
<br><br>

2. Create files in `vegetables` named `apple.txt` and `lettuce.txt`:
<br><br>
 ```touch ./vegetables/apple.txt ./vegetables/lettuce.txt```
<br><br>

3. Rename `apple.txt` to `cabbage.txt`:
<br><br>
```mv ./vegetables/apple.txt ./vegetables/cabbage.txt```
<br><br>

4. Delete the `cakes` directory and everything inside it:
<br><br>
```rm -rf ./cakes```
<br><br>

### JS Variables

1. Assign the string "JD" to a variable named `doctor`:
<br><br>
```js
let doctor = 'JD';
```
<br><br>

2. Using the `doctor` variable instead of the text "JD", use ***template literals*** to form the string "my favorite fictional doctor is named JD", assigning it to a variable named `phrase`:
<br><br>
```js
let phrase = `my favorite fictional doctor is named ${doctor}`;
```
<br><br>

### JS Conditionals
```js
var milesPerGallon = 29;
var gallonsLeft = 3;
```

1. Assuming your car runs with the above variables, write an `if` statement that console.logs "SOS!" if your car cannot reach the closest gas station that is `100` miles away (no need to write a function, just the `if` statement please):
<br><br>
```js
if (milesPerGallon * gallonsLeft < 100) console.log('SOS!');
```
<br><br>


### Data Structures - JS Arrays

1. Create an array named `weekend` with just the strings 'Saturday' and 'Monday' in it:
<br><br>
```js
let weekend = ['Saturday', 'Monday'];
```
<br><br>

2. Add the string 'Sunday' to the end of the `weekend` array:
<br><br>
```js
weekend.push('Sunday');
```
<br><br>

3. Now add the string 'Friday' to the front of the `weekend` array:
<br><br>
```js
weekend.unshift('Friday');
```
<br><br>

4. Because 'Monday' is a weekday, remove it from the `weekend` array:
<br><br>
```js
weekend.splice(2, 1);
```
<br><br>

5. Using square bracket notation, access 'Saturday' in the `weekend` array and assign to a variable named `day` (Note: the array has three days in it as this point):
<br><br>
```js
let day = weekend[1];
```
<br><br>

6. Remove 'Friday' from the array:
<br><br>
```js
weekend.shift();
```
<br><br>

### Data Structures - JS Objects

#### Don't forget to use a `var` or `let` when defining new variables...

1. Write an object literal named `brain` having a property with a key of `energyLevel` and a numeric value of `10`:
<br><br>
```js
let brain = {energyLevel: 10};
```
<br><br>

2. Assign the property of `energyLevel` to a variable named `energy`:
<br><br>
```js
let energy = brain.energyLevel;
```
<br><br>

3. Add a `dream` property to the `brain` object that holds the string  'electric sheep':
<br><br>
```js
brain.dream = 'electric sheep';
```
<br><br>

### JS Functions

1. Write a function declaration named `computeArea` that has two parameters, `length` & `width`, and **returns** the area of a rectangle (the product of `length` and `width`):
<br><br>
```js
function computeArea(length, width) {
  return length * width;
}
```
<br><br>

2. Invoke the `computeArea` function with `3` and `4` as arguments and save the returned result to a variable named `area`:
<br><br>
```js
let area = computeArea(3, 4)
```
<br><br>

3. Add a method to the `brain` object called `eat` which will increase the `energyLevel` property by `2`:
<br><br>
```js
brain.eat = function() {
  this.energyLevel += 2;
}
```
<br><br>