import React from 'react';

const Register = ({ switchToLogin }) => {
  return (
    <div className='user-register'>
      <h1>SIGN UP</h1>
      <form className='register-form'>
        <input type="text" placeholder="Name" className='form-input' /> <br/>
        <input type='text' placeholder='Username' className='form-input' /> <br/>
        <input type="password" placeholder="Password" className='form-input' /> <br/>
        <input type="email" placeholder="Email" className='form-input' /> <br/>
        <button className='register-button'>Register</button>
      </form>
      <p>Already have an account? <button onClick={switchToLogin}>Login</button></p>
    </div>
  );
};

export default Register;
