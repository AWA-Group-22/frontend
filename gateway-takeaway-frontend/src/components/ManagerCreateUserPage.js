import React, { useState } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ManagerCreateUserPage.module.css';

export default function ManagerCreateUserPage() {
    let navigate = useNavigate();
    const [ CreateUserProcessState, setCreateUserProcessState ] = useState("idle");

    const handleCreateUserSubmit = async (event) => {
        event.preventDefault();
        setCreateUserProcessState("processing");
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
        setCreateUserProcessState("success");
        setTimeout(() => {
            setCreateUserProcessState("idle")
            navigate("/login", { replace: true });
        }, 1500);
        } catch (error) {
        console.error(error);
        setCreateUserProcessState("error");
        setTimeout(() => setCreateUserProcessState("idle"), 1500);
        }
    };

    let CreateUserUIControls = null;
    switch(CreateUserProcessState) {
        case "idle":
        CreateUserUIControls = <button className={ styles.signInButton } type="submit">Create a user</button>
        break;

        case "processing":
        CreateUserUIControls = <span style={{color: 'blue'}}>Processing user creation...</span>
        break;

        case "success":
        CreateUserUIControls = <span style={{color: 'green'}}>User created</span>
        break;

        case "error":
        CreateUserUIControls = <span style={{color: 'red'}}>Error</span>
        break;

        default:
        CreateUserUIControls = <button type="submit">Create a user</button>
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleText}>Manager: user creation</div>
            <div className={styles.subtitleText}>Create an account by filling in the user's details</div>
            <form onSubmit ={ handleCreateUserSubmit }> 
                <div className={styles.text1}>First Name*</div>
                <label>
                    <input className={styles.textField1} type="text" First_Name="first_name" />
                </label>
                    <div className={styles.text2}>Last Name*</div>
                <label>
                    <input className={styles.textField2} type="text" Last_Name="last_name" />
                </label>
                <div className={styles.text3}>Username*</div>
                <label>
                    <input className={styles.textField3} type="text" Username="username" />
                </label>
                <div className={styles.text4}>Phone number*</div>
                <label>
                    <input className={styles.textField4} type="text" Phone_Number="phone_number" />
                </label>
                <div className={styles.text5}>Date of birth*</div>
                <label>
                    <input className={styles.textField5} type="text" Date_Of_Birth="date_of_birth" />
                </label>
                <div className={styles.text6}>Address*</div>
                <label>
                    <input className={styles.textField6} type="text" Address="address" />
                </label>
                <div className={styles.text7}>Country*</div>
                <label>
                    <input className={styles.textField7} type="text" Country="country" />
                </label>
                <div className={styles.text8}>Password*</div>
                <label>
                    <input className={styles.textField8} type="text" Password="password" />
                </label>
                <div>
                    { CreateUserUIControls }
                </div>
            </form>
        </div>
    )
}