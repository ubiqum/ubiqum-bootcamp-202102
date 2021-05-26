import './Login.css'

export default function(props) {
    const { onSubmit } = props

    function handleSubmit(event) {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        onSubmit(username, password)
    }

    return <form className="login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login</button>
    </form>
}