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
          <input type="checkbox" id="g1" name="genre" value="Bike" />
          <label for="g1"> I have a bike</label><br />
          <input type="checkbox" id="g2" name="genre" value="Car" />
          <label for="g2"> I have a car</label><br />
          <input type="checkbox" id="g3" name="genre" value="Boat" />
          <label for="g3"> I have a boat</label><br />
          <input type="checkbox" id="g4" name="genre" value="Bike" />
          <label for="g4"> I have a bike</label><br />
          <input type="checkbox" id="g5" name="genre" value="Car" />
          <label for="g5"> I have a car</label><br />
          <input type="checkbox" id="g6" name="genre" value="Boat" />
          <label for="g6"> I have a boat</label><br />
          <input type="checkbox" id="g7" name="genre" value="Bike" />
          <label for="g7"> I have a bike</label><br />
          <input type="checkbox" id="g8" name="genre" value="Car" />
          <label for="g8"> I have a car</label><br />
          <input type="checkbox" id="g9" name="genre" value="Boat" />
          <label for="g9"> I have a boat</label><br />
          <input type="checkbox" id="g10" name="genre" value="Bike" />
          <label for="g10"> I have a bike</label><br />
          <input type="checkbox" id="g11" name="genre" value="Car" />
          <label for="g11"> I have a car</label><br />
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