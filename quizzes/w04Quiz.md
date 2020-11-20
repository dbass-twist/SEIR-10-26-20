# `SEIR` Week 4 Assessment
## For this quiz, please slack your instructors the answers, in numbered order. Do not include the questions. For example:
    1. Swag
    2. Yolo


## Routing
1. Assume your controller was required as puppiesCtrl, and you had you wanted to render a show page. What would the appropriate RESTful route be?

<br>



2. What would be issue with the following routes?
```js
    router.get('/puppies/:id', puppiesCtrl.getOne);
    router.get('/puppies/new', puppiesCtrl.new);
```

<br>


## Middleware
3. What is the typical payload that the request object has access to when a post request is sent?



4. Why is methodOverride required in our Express apps when we use EJS?


## EJS
5. What is the difference between ```<% %>``` and ```<%= %>```?


6. Assume that you are rendering an index.ejs, which has access to an array of puppy objects. Each puppy object has an id property. You have created an unordered list, and have started looping through your puppies:
```js 
puppies.forEach(puppy) => {
    <li>
        <a href="????"><%=puppy.name%></a>
    </li>
})
```
What would you replace the ```"????"``` with to link to the show page for each puppy using its id?
<br><br>


## Controller Methods
7. What are the two parameters you will almost always set when you define a controller method?
8. What are two arguments that res.render accepts?



## Big O and Recursion

<br>

9. What is the time complexity of this function?
```js
function factorial(n){
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```
<br>


10. Is the following a recursive function?
```js
function generateNextSet(arr) {
    let newResults = [];
    arr.forEach(outcome => {
      newResults.push(outcome + 'T');
      newResults.push(outcome + 'H');
    })
    return newResults;
  }
```
<br>
