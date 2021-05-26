var inputA = document.getElementById('a')
var inputB = document.getElementById('b')

function add(a, b) { 
    return a + b
}

var buttonAdd = document.getElementById('add')
buttonAdd.addEventListener('click', function(event) {
    var a = Number(inputA.value), b = Number(inputB.value)

    var r = add(a, b)

    var spanResult = document.getElementById('result')
    spanResult.innerText = r
})

function sub(a, b) { 
    return a - b
}

var buttonSub = document.getElementById('sub')
buttonSub.addEventListener('click', function(event) {
    var a = Number(inputA.value), b = Number(inputB.value)

    var r = sub(a, b)

    var spanResult = document.getElementById('result')
    spanResult.innerText = r
})