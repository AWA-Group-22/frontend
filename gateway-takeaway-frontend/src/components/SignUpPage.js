import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {

    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.brandText}>Gateway Takeaway</div>
            </div>
        
        <div className={styles.container}>
            <div className={styles.titleText}>User sign up</div>
            <div className={styles.subtitleText}>Create an account by filling in the details</div>
            <form> 
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
                </div>
            </form>
        </div>
        </div>
    )
}