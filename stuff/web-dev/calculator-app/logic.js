function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function login(email, password) {
    if (email === '')
        throw new Error('e-mail cannot be empty')

    if (password === '')
        throw new Error('password cannot be empty')

    var user = data.find(function (user) {
        return user.email === email && user.password === password
    })

    if (!user) throw new Error('wrong credentials')
}

function register(fullname, email, password) {
    if (fullname === '')
        throw new Error('fullname cannot be empty')

    if (email === '')
        throw new Error('e-mail cannot be empty')

    if (password === '')
        throw new Error('password cannot be empty')

    var user = data.find(function (user) {
        return user.email === email
    })

    if (user) throw new Error('user already exists')

    var user = { fullname, email, password }

    data.push(user)
}