// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

function myBind(func, ctx, args) {
    return function() {
        return func.apply(ctx,[args])
    }
}

function salute(name) {
    return this.name + ': "Hello, ' + name + '!"'    
}

var person = { name: 'Peter' };
var salute6 = myBind(salute,person,'Francis');
console.log(salute6());