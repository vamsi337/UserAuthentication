import React from 'react'

const Register = ()=>{
    return(
        <div className='user-register'>
            <h1>Register Page</h1>
          <form>
            {/* Add input fields for registration (e.g., username, password, email) */}
            <input type="text" placeholder="Username"/> 
            <input type="password" placeholder="Password" /> 
            <input type="email" placeholder="Email" />
            {/* Add a button for registration */}
            <button>Register</button>
          </form>
          {/* Login option */}
      <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    )
}

function Home() {
  return (
    <div>
      <Register/>
    </div>
  )
}

export default Home
