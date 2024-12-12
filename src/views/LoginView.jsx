import style8 from './LoginView.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context';  

function LoginView() {
  const { email: contextEmail, password: contextPassword } = useStoreContext();  
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();

    
    if (email === contextEmail && password === contextPassword) {
      navigate('/movies/genre');
    } else {
      alert("Invalid email or password!");
    }
  }

  return (
    <div className={style8.body}>
      <div className={style8.logincontainer}>
        <div className={style8.formcontainer}>
          <h2>Login to Your Account</h2>
          <form onSubmit={login}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}  
              onChange={(event) => setEmail(event.target.value)} 
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
              required
            />
            <button type="submit" className={style8.loginbutton}>Login</button>
          </form>
          <p className={style8.registerlink}>New to ACI Theatre? <a href="#">Register now</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
