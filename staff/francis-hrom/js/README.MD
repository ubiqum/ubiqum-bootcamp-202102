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

# apply vs call vs bind

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

# Polyfills

- a polyfill basically is a browser fallback piece of code which makes the modern browser based functionality available in older browsers too
- formally: polyfill is a shim for a browser API
- in computer programming, a shim is a library that transparently intercepts API calls and changes the arguments passed, handles the operation itself or redirects the operation elsewhere.
- new features which are not availible in older browsers are either compiled (transforming, changing syntax so it is compatibile with older browsers) or polyfilled (adding new methods or objects which might be needed in the older browsers)

**Sources:**

- https://en.wikipedia.org/wiki/Polyfill_(programming)
- https://en.wikipedia.org/wiki/Shim_(computing)
- Compiling vs Polyfills with Babel (JavaScript) https://youtu.be/BXoiuN1a0-E

# Arrow functions

- An arrow function is a new feature introduced in ES6 by which we don't require the function keyword to define the function.
- The { brackets } and ( parentheses ) and "return" are optional, but may be required in situations with multiple arguments, no arguments or multiple lines of code
- Syntax examples:

```javascript
// One param. With simple expression return is not needed:
param => expression;
a => a + 100;

// Multiple params require parentheses. With simple expression return is not needed:
(param1, paramN) => expression
(a, b) => a + b + 100;

// Multiline statements require body brackets and return:
param => {
  let a = 1;
  return a + param;
}
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}

// To return an object literal expression requires parentheses around expression:
params => ({foo: "a"}) // returning the object {foo: "a"}

// Rest parameters are supported:
(a, b, ...r) => expression

// Default parameters are supported:
(a=400, b=20, c) => expression

// Destructuring within params supported:
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30

// named functions
const functionName = (param1, paramN) => expression
const myFunction = (a, b) => a + b + 100;
```

- Arrow functions establish "this" based on the scope the Arrow function is defined within.
- Limitations:
  - Does not have its own bindings to this or super, and should not be used as methods.
  - Does not have arguments, or new.target keywords.
  - Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
  - Can not be used as constructors.
  - Can not use yield, within its body.
- Advantages:
  - It reduces the code size
  - Return statement and Functional braces are optional for single line functions
  - Lexically bind the context (by using the arrow function, we do not require to bind it implicitly because it performs automatically by the arrow function.)
- Suggestion from developer Lars Schöning:
  1. Use function in the global scope and for Object.prototype properties.
  2. Use class for object constructors.
  3. Use => everywhere else (as default)

**Sources:**

- https://www.javatpoint.com/es5-vs-es6
- https://www.javatpoint.com/es6-arrow-function
- JavaScript ES6 Arrow Functions Tutorial https://youtu.be/h33Srr5J9nY
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
