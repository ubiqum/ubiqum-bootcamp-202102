function setDelay(callback, millis) {
    var before = Date.now()

    while(Date.now() - before < millis) {
        // NOOP
    }

    callback()
}

//setDelay(function() {
setTimeout(function() {
    console.log('hello boss!!!!!')
}, 0)

setDelay(function() {
//setTimeout(function() {
    console.log('do')
}, 3000)


//console.log('hello boss')

