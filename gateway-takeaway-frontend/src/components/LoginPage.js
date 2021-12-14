import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import axios from 'axios';
import {UserAuthContext} from './Contexts'

export default function LoginPage(props) {

  const UserAuthContextValue = useContext(UserAuthContext);

  let navigate = useNavigate();

  const [ loginProcessState, setLoginProcessState ] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoginProcessState("processing");
    try {
      const result = await axios.post('https://back-end-22-group.herokuapp.com/login', null, {
        auth: {
          username: event.target.username.value,
          password: event.target.password.value
        }
      })
      console.log(result);
      console.log(result.data);
      setLoginProcessState("success");
      setTimeout(() => {
        setLoginProcessState("idle")
        UserAuthContextValue.login(result.data.jwt);
        navigate("/home", { replace: true });
      }, 1500);
    } catch (error) {
      console.error(error.message);
      setLoginProcessState("error");
      setTimeout(() => setLoginProcessState("idle"), 1500);
    }
  }

  let loginUIControls = null;
  switch(loginProcessState) {
    case "idle":
      loginUIControls = <button className={styles.signInButton} type="submit">Login</button>
      break;

    case "processing":
      loginUIControls = <span style={{color: 'blue'}}>Processing login...</span>
      break;

    case "success":
      loginUIControls = <span style={{color: 'green'}}>Login successful</span>
      break;

    case "error":
      loginUIControls = <span style={{color: 'red'}}>Error</span>
      break;

    default:
      loginUIControls = <button className={styles.signInButton} type="submit">Login</button>
  }

  return (
    <div>
      <div className={styles.headerContainer}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
          <div className={styles.container}>
              <div className={styles.titleText}>Sign in</div>
              <div className={styles.subtitleText}>Login with your account</div>
              <div className={styles.lowerText}>Don't have an account?
                  <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link></div>
              <form onSubmit={ onSubmit }>
                  <div className={styles.usernameText}>Username<input className={styles.usernameField} type="text" name="username"/></div>
                  <div className={styles.passwordText}>Password <input className={styles.passwordField} type="password" name="password"/></div>
                  <div>
                      { loginUIControls }
                  </div>
                  <div className={styles.managerLoginLink}>
                    <Link to="/managerlogin" style={{ textDecoration: 'none' }}>Manager sign in</Link>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}