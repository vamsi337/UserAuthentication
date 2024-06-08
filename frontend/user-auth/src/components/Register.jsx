
import React from 'react'

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
          <form>
            {/* Add input fields for registration (e.g., username, password, email) */}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="Email" />
            {/* Add a button for registration */}
            <button>Register</button>
          </form>
    </div>
  )
}

export default Register

