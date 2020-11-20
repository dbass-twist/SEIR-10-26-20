# `SEIR` Week 4 Assessment
## For this quiz, please slack your instructors the answers, in numbered order. Do not include the questions. For example:
    1. Swag
    2. Yolo


## Routing
1. Assume your controller was required as puppiesCtrl, and you had you wanted to render a show page. What would the appropriate RESTful route be?


<br>

**Solution:**
```js
    router.get('/:id', puppiesCtrl.show);
```

2. What would be issue with the following routes?
```js
    router.get('/puppies/:id', puppiesCtrl.getOne);
    router.get('/puppies/new', puppiesCtrl.new);
```

<br>

**Solution:
The new function would never get invoked as puppies/:id will run when puppies/new is passed in.**

<br>

## Middleware
3. What is the typical payload that the request object has access to when a post request is sent?

**Solution: req.body**

4. Why is methodOverride required in our Express apps when we use EJS?

**Solution: HTML files can only send get and post requests**

## EJS
5. What is the difference between ```<% %>``` and ```<%= %>```?
<br><br>
**Solution: Squids with ink will render on to the HTML, while squids without ink do not**
<br><br>

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
**Solution:**
```js
    "puppies/<%=puppy.id%>"
```
<br>

## Controller Methods
7. What are the two parameters you will almost always set when you define a controller method?
<br>

**Solution: req and res**
<br><br>

8. What are two arguments that res.render accepts?

<br><br>

**Solution: Which file to render and what data to provide to it**

<br><br>

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

**Solution: O(n)**

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

**Solution: No**