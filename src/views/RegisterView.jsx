import style10 from "./RegisterView.module.css";
import { useStoreContext } from '../context';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterView() {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [verifpass, setVerifpass] = useState('');
  const { setEmail: setContextEmail, setFirst, setLast, setPassword:setPass } = useStoreContext();

  function signup(event) {
    event.preventDefault();
    if (password === verifpass) {
      setFirst(fname);
      setLast(lname);
      setContextEmail(email);
      setPass(password);
      console.log(fname,lname,email,password,verifpass);
      navigate('/movies/genre');
    } else {
      alert("passwords do not match");
    }
  }
  
  return (
    <div className={style10.body}>
      <div className={style10.genrecontainer}>
        <div className={style10.genreselect}>
          <h2>Select Genres</h2>
          <input type="checkbox" id="28" name="Action" value="Bike" />
          <label for="28">Action</label><br />
          <input type="checkbox" id="16" name="Animation" value="Car" />
          <label for="16">Animation</label><br />
          <input type="checkbox" id="35" name="Comedy" value="Boat" />
          <label for="35">Comedy</label><br />
          <input type="checkbox" id="10751" name="Family" value="Bike" />
          <label for="10751">Family</label><br />
          <input type="checkbox" id="36" name="History" value="Car" />
          <label for="36">History</label><br />
          <input type="checkbox" id="27" name="Horror" value="Boat" />
          <label for="g6">Horror</label><br />
          <input type="checkbox" id="10402" name="Music" value="Bike" />
          <label for="10402">Music</label><br />
          <input type="checkbox" id="878" name="Science Fiction" value="Car" />
          <label for="878">Science Fiction</label><br />
          <input type="checkbox" id="53" name="Thriller" value="Boat" />
          <label for="53">Thriller</label><br />
          <input type="checkbox" id="10752" name="War" value="Bike" />
          <label for="10752">War</label><br />
          <input type="checkbox" id="37" name="Western" value="Car" />
          <label for="37">Western</label><br />
        </div>
      </div>
      <div className={style10.logincontainer}>
        <div className={style10.formcontainer}>
          <h2>Create an Account</h2>
          <form onSubmit={signup}>
            <label htmlFor="text">First name</label>
            <input type="text" id="text" name="text"
              value={fname} onChange={(e) => setFname(e.target.value)} required />
            <label htmlFor="text">Last Name</label>
            <input type="text" id="text" name="text"
              value={lname} onChange={(e) => setLname(e.target.value)} required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"
              value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="spassword">Re-enter Password</label>
            <input type="password" id="spassword" name="spassword"
              value={verifpass} onChange={(e) => setVerifpass(e.target.value)} required />
            <button type="submit" className={style10.loginbutton}>Sign Up</button>
          </form>
          <p className={style10.registerlink}>Already have an Account? <a href="#">Login Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterView;