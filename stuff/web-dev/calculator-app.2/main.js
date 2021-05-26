var data = []

var login = document.getElementById('login')
login.querySelector('a').addEventListener('click', function (event) {
    login.style.display = 'none'
    register.style.display = 'block'
})
login.addEventListener('submit', function (event) {
    event.preventDefault()

    var email = login.querySelector('input[name=email]').value
    var password = login.querySelector('input[name=password]').value

    if (email === '')
        alert('e-mail cannot be empty')

    if (password === '')
        alert('password cannot be empty')

    var user = data.find(function(user) { 
        return user.email === email && user.password === password
    })

    if (user) {
        login.style.display = 'none'
        calc.style.display = 'block'
    } else alert('wrong credentials')
})

var register = document.getElementById('register')
register.style.display = 'none'
register.querySelector('a').addEventListener('click', function (event) {
    register.style.display = 'none'
    login.style.display = 'block'
})
register.addEventListener('submit', function (event) {
    event.preventDefault()

    var fullname = register.querySelector('input[name=fullname]').value
    var email = register.querySelector('input[name=email]').value
    var password = register.querySelector('input[name=password]').value

    if (fullname === '')
        alert('fullname cannot be empty')

    if (email === '')
        alert('e-mail cannot be empty')

    if (password === '')
        alert('password cannot be empty')

    // TODO verifiy user already exists. in case yes, show an error

    var user = { fullname, email, password }

    data.push(user)

    alert('user successfully registered')

    register.style.display ='none'
    login.style.display = 'block'
})

var calc = document.getElementById('calc')
calc.style.display = 'none'

var inputA = document.getElementById('a')
var inputB = document.getElementById('b')

var buttonAdd = document.getElementById('add')
buttonAdd.addEventListener('click', function (event) {
    var a = Number(inputA.value), b = Number(inputB.value)

    var r = add(a, b)

    var spanResult = document.getElementById('result')
    spanResult.innerText = r
})

var buttonSub = document.getElementById('sub')
buttonSub.addEventListener('click', function (event) {
    var a = Number(inputA.value), b = Number(inputB.value)

    var r = sub(a, b)

    var spanResult = document.getElementById('result')
    spanResult.innerText = r
})