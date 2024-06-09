import './App.css';
import Register from './components/Register';
import Login from './components/Login';

import React, { useState } from 'react';

function App() {
  const [isLogin, setLogin] = useState(true);

  const switchToLogin = () => {
    setLogin(true); // Set login to true to render the Login component
  };

  const switchToRegister = () => {
    setLogin(false); // Set login to false to render the Register component
  };

  return (
    <div className="App">
      {isLogin ? <Login switchToRegister={switchToRegister} /> : <Register switchToLogin={switchToLogin} />}
    </div>
  );
}

export default App;
