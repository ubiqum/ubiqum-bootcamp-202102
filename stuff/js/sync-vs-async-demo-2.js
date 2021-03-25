function setDelay(callback, millis) {
    var before = Date.now()

    while(Date.now() - before < millis) {
        // NOOP
    }

    callback()
}

setTimeout(function() {
    console.log('hello my sweet boss', new Date)
}, 2000)

setTimeout(function() {
    console.log('hello my boss', new Date)
    
    setDelay(function() {
        console.log('how are you?', new Date)
    }, 2000)
}, 1000)

setTimeout(function() {
    console.log('hello my boss 2', new Date)
}, 3000)



console.log('hello boss', new Date)


