# Scope vs Context
- Scope pertains to the visibility of the variables (variable access)
- Scope has two levels: global scope and local scope
- Context is always the value of the "this" keyword which is a reference to the object that “owns” the currently executing code


**Sources:**
- http://ryanmorr.com/understanding-scope-and-context-in-javascript
- https://betterprogramming.pub/scope-vs-context-in-javascript-b31818f58558
- https://stackoverflow.com/questions/14328519/different-in-scope-and-context-in-this-javascript-code 


# Hoisting
- Hoisting is JavaScript's default behavior of moving declarations to the top
- Variable and function declarations are put into memory during the compile phase

**Sources:**
- https://www.w3schools.com/js/js_hoisting.asp
- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting


# Closures
- Closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables

**Sources:**
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
- https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4 


# Currying
- Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c)
- Curried function is a function which takes multiple parameters one at a time, by taking the first argument, and returning a series of functions which each take the next argument until all the parameters have been fixed, and the function application can complete, at which point, the resulting value is returned
- With currying a fuction can gradually pick up arguments during the run of an app
- It is named after Haskell Curry (so it has nothing to do with indian food, leather or horses)

**Sources:**
- https://javascript.info/currying-partials
- https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983 

# Prototype Chain
- One-way delegation relationship between two objects
- Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain
- The structure of the prototype chain should be Instance of a Child → Child.prototype → Parent.prototype

**Sources:**
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
- https://toastui.medium.com/javascripts-prototype-chain-made-easy-adbcd5a76e75