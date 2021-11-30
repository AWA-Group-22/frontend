import React, { useState } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {
    let navigate = useNavigate();
    const [ signupProcessState, setSignupProcessState ] = useState("idle");

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        setSignupProcessState("processing");
        try {
        const result = await axios.post(Constants.API_ADDRESS + '/registerBasic', {
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            username: event.target.username.value,
            phone_number: event.target.phone_number.value,
            date_of_birth: event.target.date_of_birth.value,
            address: event.target.address.value,
            country: event.target.country.value,
            password: event.target.password.value
        })
        console.log(result);
        setSignupProcessState("success");
        setTimeout(() => {
            setSignupProcessState("idle")
            navigate("/login", { replace: true });
        }, 1500);
        } catch (error) {
        console.error(error);
        setSignupProcessState("error");
        setTimeout(() => setSignupProcessState("idle"), 1500);
        }
    };

    let signupUIControls = null;
    switch(signupProcessState) {
        case "idle":
        signupUIControls = <button className={ styles.signInButton } type="submit">Sign up</button>
        break;

        case "processing":
        signupUIControls = <span style={{color: 'blue'}}>Processing signup...</span>
        break;

        case "success":
        signupUIControls = <span style={{color: 'green'}}>User created</span>
        break;

        case "error":
        signupUIControls = <span style={{color: 'red'}}>Error</span>
        break;

        default:
        signupUIControls = <button type="submit">Sign up</button>
    }

    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.brandText}>Gateway Takeaway</div>
            </div>
        
        <div className={styles.container}>
            <div className={styles.titleText}>User sign up</div>
            <div className={styles.subtitleText}>Create an account by filling in the details</div>
            <form onSubmit ={ handleSignupSubmit }> 
                <div className={styles.text1}>First Name*</div>
                <label>
                    <input className={styles.textField1} type="text" name="first_name" />
                </label>
                    <div className={styles.text2}>Last Name*</div>
                <label>
                    <input className={styles.textField2} type="text" name="last_name" />
                </label>
                <div className={styles.text3}>Username*</div>
                <label>
                    <input className={styles.textField3} type="text" name="username" />
                </label>
                <div className={styles.text4}>Phone number*</div>
                <label>
                    <input className={styles.textField4} type="text" name="phone_number" />
                </label>
                <div className={styles.text5}>Date of birth*</div>
                <label>
                    <input className={styles.textField5} type="text" name="date_of_birth" />
                </label>
                <div className={styles.text6}>Address*</div>
                <label>
                    <input className={styles.textField6} type="text" name="address" />
                </label>
                <div className={styles.text7}>Country*</div>
                <label>
                    <input className={styles.textField7} type="text" name="country" />
                </label>
                <div className={styles.text8}>Password*</div>
                <label>
                    <input className={styles.textField8} type="text" name="password" />
                </label>
                <div>
                    { signupUIControls }
                </div>
            </form>
        </div>
        </div>
    )
}