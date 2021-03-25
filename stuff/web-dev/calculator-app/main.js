var loginForm = document.getElementById('login')
loginForm.querySelector('a').addEventListener('click', function (event) {
    loginForm.style.display = 'none'
    registerForm.style.display = 'block'
})
loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var email = loginForm.querySelector('input[name=email]').value
    var password = loginForm.querySelector('input[name=password]').value

    try {
        login(email, password)

        loginForm.style.display = 'none'
        calc.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
})

var registerForm = document.getElementById('register')
registerForm.style.display = 'none'
registerForm.querySelector('a').addEventListener('click', function (event) {
    registerForm.style.display = 'none'
    loginForm.style.display = 'block'
})
registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var fullnameInput = registerForm.querySelector('input[name=fullname]')
    var emailInput = registerForm.querySelector('input[name=email]')
    var passwordInput = registerForm.querySelector('input[name=password]')

    var fullname = fullnameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    try {
        register(fullname, email, password)

        fullnameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''

        alert('user successfully registered')

        registerForm.style.display = 'none'
        loginForm.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
})

var calc = document.getElementById('calc')
calc.style.display = 'none'

var aInput = document.getElementById('a')
var bInput = document.getElementById('b')

var addButton = document.getElementById('add')
addButton.addEventListener('click', function (event) {
    var a = Number(aInput.value), b = Number(bInput.value)

    var r = add(a, b)

    var spanResult = document.getElementById('result')
    spanResult.innerText = r
})

var subButton = document.getElementById('sub')
subButton.addEventListener('click', function (event) {
    var a = Number(aInput.value), b = Number(bInput.value)

    var r = sub(a, b)

    var spanResult = document.getElementById('result')
    spanResult.innerText = r
})