import style10 from "./RegisterView.module.css";

function RegisterView() {
  return (
    <div className={style10.body}>
      <div className={style10.logincontainer}>
        <div className={style10.formcontainer}>
          <h2>Create an Account</h2>
          <form onSubmit={(event) => { login(event) }}>
            <label htmlFor="text">First name</label>
            <input type="text" id="text" name="text" />
            <label htmlFor="text">Last Name</label>
            <input type="text" id="text" name="text" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Re-enter Password</label>
            <input type="password" id="spassword" name="password" />
            <button type="submit" className={style10.loginbutton}>Sign Up</button>
          </form>
          <p className={style10.registerlink}>Already have an Account? <a href="#">Login Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterView;