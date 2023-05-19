import React from 'react'

const SignupPage = () => {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>Do not have an account?</p>
        <button type='submit'/>
      </form>
    </div>
  )
}

export default SignupPage