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


#  apply vs call vs bind
- All of them are methods inherited in all functions from the Function.prototype
- Call invokes the function and allows you to pass in arguments one by one
- Apply invokes the function and allows you to pass in arguments as an array
- Bind returns a new function, allowing you to pass in a "this" in correct context and any number of arguments
- Call and apply are mostly interchangeable. Decision on what to use should be whether it’s easier to send in an array or a comma separated list of arguments
- Mnemonic: Call is for comma (separated list) and Apply is for Array
- Bind returns a new function. Call and Apply execute the current function immediately
- Bind use cases are for example curry functions or events like onClick where we don’t know when they’ll be fired but we know what context we want them to have

**Sources:**
- https://www.freecodecamp.org/news/the-difference-between-javascripts-call-apply-and-bind-methods-4e69917f77bd/
- https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
