import React from 'react'

// create a react form ? 

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>Do not have an account?</p>
      </form>
    </div>
  )
}

export default Login