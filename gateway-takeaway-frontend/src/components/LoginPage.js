import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css'
import Constants from './Constants.json';

export default function LoginPage(props) {

    const navigate = useNavigate();
    const [ loginProcessState, setLoginProcessState ] = useState("idle");

    const handleLoginSumbit = async (event) => {
        event.preventDefault();
        setLoginProcessState("processing");
        console.log(event.target.email.value);
        console.log(event.target.password.value);

        try {
            const result = await axios.post(Constants.API_ADDRESS + '/loginforJWT', null,
            {
                username: event.target.username.value,
                password: event.target.password.value
            });
            console.log(result);
            console.log(result.data);
            setLoginProcessState("loginSuccess");
            setTimeout(() => {
                setLoginProcessState("idle");
                props.login(result.data.token);
                navigate('/home', { replace: true });
            }, 1500);
        } catch (error) {
            console.error(error.message);
            setLoginProcessState("error");
            setTimeout(() => setLoginProcessState("idle"), 1500);
        }
    }

    let loginUIControls = null;
    switch (loginProcessState) {
        case "idle":
            loginUIControls = <button className={ styles.signInButton } type="submit">Sign in</button>
            break;
      
          case "processing":
            loginUIControls = <span style={{color: 'blue'}}>Processing login...</span>
            break;
      
          case "loginSuccess":
            loginUIControls = <span style={{color: 'green'}}>Login successful</span>
            break;
      
          case "error":
            loginUIControls = <span style={{color: 'red'}}>Error</span>
            break;
      
          default:
            loginUIControls = <button type="submit">Sign in</button>
    }

    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.brandText}>Gateway Takeaway</div>
            </div>
            <div className={styles.container}>
                <div className={styles.titleText}>Sign in</div>
                <div className={styles.subtitleText}>Login with your account</div>
                <div className={styles.lowerText}>Don't have an account?
                    <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link></div>

                <div className={styles.emailText}>Username</div>
                <form onSubmit ={ handleLoginSumbit }> 
                    <label>
                        <input className={styles.emailField} type="text" name="username" />
                    </label>
                        <div className={styles.passwordText}>Password</div>
                    <label>
                        <input className={styles.passwordField} type="text" name="password" />
                    </label>
                    <div>
                        { loginUIControls }
                    </div>
                </form>
            </div>
            </div>
        )
    }









/*
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginPage.module.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.titleText}>Sign in</div>
                <div className={styles.subtitleText}>Login with your account</div>
                <div className={styles.lowerText}>Don't have an account?
                    <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link></div>

                <div className={styles.emailText}>Email</div>
                <form> 
                    <label className={styles.emailField}>
                        <input type="text" Email="Email" />
                    </label>
                </form>
                <div className={styles.passwordText}>Password</div>
                <form> 
                    <label className={styles.passwordField}>
                        <input type="text" Password="Password" />
                    </label>
                </form>
                    <div className={styles.signInButton}>
                        <input type="submit" value="Sign in"/>
                    </div>

            </div>
        )
    }
}

*/
