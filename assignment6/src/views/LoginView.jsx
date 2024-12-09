import style8 from './LoginView.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginView() {

  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    if (password === "iloveyou") {
      navigate('/movies/genre');
    } else {
      alert("Wrong password!");
    }
  }

  return (
    <div className={style8.body}>
      <div className={style8.logincontainer}>
        <div className={style8.formcontainer}>
          <h2>Login to Your Account</h2>
          <form onSubmit={(event) => { login(event) }}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
            <button type="submit" className={style8.loginbutton}>Login</button>
          </form>
          <p className={style8.registerlink}>New to ACI Theatre? <a href="#">Register now</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginView;