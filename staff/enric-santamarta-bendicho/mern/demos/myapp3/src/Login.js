function Login(props){

  const {onSubmit} = props

  function handleSubmit(event){
      event.preventDefault()

      const workerName = event.target.workerName.value

      const password = event.target.password.value

      onSubmit(workerName,password)

  }

  return(
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Enter your name:</h2>
        <input type="text" name="workerName" />
        <h2>Enter your password:</h2>
        <input type="password" name="password" />
        <div>
        <button className="LoginButton">Login</button>
        </div>
        </form>
      </div>
    )
  }
  
  export default Login
