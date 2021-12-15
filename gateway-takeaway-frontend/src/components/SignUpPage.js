import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {

    let navigate = useNavigate();

    const [signupUsername, setSignupUsername] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupFirstName, setsignupFirstName] = useState("");
    const [signupLastName, setSignupLastName] = useState("");
    const [signupAddress, setsignupAddress] = useState("");
    const [signupPhoneNumber, setSignupPhoneNumber] = useState("");
    const [signupCountry, setsignupCountry] = useState("");
    const [signupDateOfBirth, setSignupDateOfBirth] = useState("");
    const [signupRoot] = useState("customer");

    const signup = () => {
        axios({
            method: "post",
            data: {
                username: signupUsername,
                password: signupPassword,
                first_name: signupFirstName,
                last_name: signupLastName,
                address: signupAddress,
                phone_number: signupPhoneNumber,
                country: signupCountry,
                date_of_birth: signupDateOfBirth,
                root: signupRoot
            },
            url: "https://back-end-22-group.herokuapp.com/register",
        })
        .then((res) => console.log(res));
        navigate('/login')
    };

    return (
        <div>
            <div className={styles.headerContainer}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link></div>
            <div className={styles.container}>
                <div className={styles.titleText}>Sign up</div>
                <div className={styles.subtitleText}>Create an account by filling in the details</div>
                <div>
                    <input className={styles.textField1} placeholder="username*" onChange={e => setSignupUsername(e.target.value)} />
                    <input className={styles.textField2} type="password" placeholder="password*" onChange={e => setSignupPassword(e.target.value)} />
                    <input className={styles.textField3} placeholder="first Name*" onChange={e => setsignupFirstName(e.target.value)} />
                    <input className={styles.textField4} placeholder="last Name*" onChange={e => setSignupLastName(e.target.value)} />
                    <input className={styles.textField5} placeholder="address*" onChange={e => setsignupAddress(e.target.value)} />
                    <input className={styles.textField6} placeholder="phone number*" onChange={e => setSignupPhoneNumber(e.target.value)} />
                    <input className={styles.textField7} placeholder="country*" onChange={e => setsignupCountry(e.target.value)} />
                    <input className={styles.textField8} placeholder="date of birth (YYYY-DD-MM)*" onChange={e => setSignupDateOfBirth(e.target.value)} />
                    <button onClick={signup} className={styles.signUpButton}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
