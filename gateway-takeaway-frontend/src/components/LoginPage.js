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
