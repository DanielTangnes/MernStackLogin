import { useState } from 'react';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await response.json()

    if(data.user) {
      alert('Login Successful')
    }
    else {
      alert('Wrong Username Or Password!')
      window.location.href = '/dashboard'
    }

    console.log(data)
  }

  return(
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder="Email Address" 
        />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          placeholder="Password" 
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default App;
