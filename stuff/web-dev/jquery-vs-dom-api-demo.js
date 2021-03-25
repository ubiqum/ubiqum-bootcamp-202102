$('a').each(function() {
    console.log(this.href)
})

document.querySelectorAll('a').forEach(function(a) {
    console.log(a.href)
})