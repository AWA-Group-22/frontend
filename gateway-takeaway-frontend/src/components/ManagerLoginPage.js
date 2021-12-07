import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ManagerLoginPage.module.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function ManagerLoginPage() {

    let navigate = useNavigate();

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [cookies, setCookie] = useCookies(['user']);

    const login = () => {
        axios({
            method: "post",
            credentials: "true",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ loginUsername, loginPassword }),
            url: "https://back-end-22-group.herokuapp.com/login",
        })
        .then((res) => console.log(res));
            setCookie('LoginUsername', loginUsername, { path: '/' });
            setCookie('LoginPassword', loginPassword, { path: '/' });
            navigate('/managerpage');
    };

    return (
        <div>
            <div className={styles.headerContainer}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
            <div className={styles.container}>
                <div className={styles.titleText}>Manager sign in</div>
                <div className={styles.subtitleText}>Login with your manager account</div>
                <div className={styles.lowerText}>Don't have an account?
                    <Link to="/managercreateuser" style={{ textDecoration: 'none' }}>Sign up</Link></div>
                <div>
                    <input className={styles.usernameField} placeholder="username" onChange={e => setLoginUsername(e.target.value)} />
                    <input className={styles.passwordField} placeholder="password" onChange={e => setLoginPassword(e.target.value)} />
                    <button onClick={login} className={styles.signInButton}>Sign in</button>
                        <Link to="/home" style={{ textDecoration: 'none' }}></Link>
                </div>
            </div>
            </div>
        </div>
    )
}