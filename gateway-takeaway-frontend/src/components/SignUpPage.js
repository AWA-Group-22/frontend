import React, { useState, Component } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';

export default class SignUpPage extends Component {
    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            address: '',
            phone_number: '',
            country: '',
            date_of_birth: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onChangeFirstName(e) {
        this.setState({ first_name: e.target.value })
    }

    onChangeLastName(e) {
        this.setState({ last_name: e.target.value })
    }

    onChangeAddress(e) {
        this.setState({ address: e.target.value })
    }

    onChangePhoneNumber(e) {
        this.setState({ phone_number: e.target.value })
    }

    onChangeCountry(e) {
        this.setState({ country: e.target.value })
    }

    onChangeDateOfBirth(e) {
        this.setState({ date_of_birth: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            phone_number: this.state.phone_number,
            country: this.state.country,
            date_of_birth: this.state.date_of_birth,
            root: this.state.root
        };

        axios.post('http://localhost:4000/register', userObject)
            .then((res) => {
                console.log(res.data)
                console.log("Account creation was successful");
            }).catch((error) => {
                console.log(error)
            });

        this.setState({
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            address: '',
            phone_number: '',
            country: '',
            date_of_birth: '',
            root: 'customer' 
        })
    }

    render() {
        return (
            <div>
            <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>            </div>
            <div className={styles.container}>
            <div className={styles.titleText}>Sign up</div>
            <div className={styles.subtitleText}>Create an account by filling in the details</div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className={styles.text1}>First name*</label>
                        <input className={styles.textField1} type="text" value={this.state.first_name} onChange={this.onChangeFirstName} />
                    </div>
                    <div className="form-group">
                        <label className={styles.text2}>Last name*</label>
                        <input className={styles.textField2} type="text" value={this.state.last_name} onChange={this.onChangeLastName} />
                    </div>
                    <div className="form-group">
                        <label className={styles.text3}>Username*</label>
                        <input className={styles.textField3} type="text" value={this.state.username} onChange={this.onChangeUserName} />
                    </div>
                    <div className="form-group">
                        <label className={styles.text4}>Phone number*</label>
                        <input className={styles.textField4} type="text" value={this.state.phone_number} onChange={this.onChangePhoneNumber} />
                    </div>
                    <div className="form-group">
                        <label className={styles.text5}>Date of birth*</label>
                        <input className={styles.textField5} type="text" value={this.state.date_of_birth} onChange={this.onChangeDateOfBirth} />
                    </div>
                    <div className="form-group">
                        <label className={styles.text6}>Address*</label>
                        <input className={styles.textField6} type="text" value={this.state.address} onChange={this.onChangeAddress} />
                    </div>
                    <div className="form-group">
                        <label className={styles.text7}>Country*</label>
                        <input className={styles.textField7} type="text" value={this.state.country} onChange={this.onChangeCountry} />
                    </div>
                    <div className="form-group">
                        <label className={styles.text8}>Password*</label>
                        <input className={styles.textField8} type="text" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div className="form-group">
                        <input className={styles.signInButton} type="submit" value="Create an account" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}









// export default function SignUpPage() {

//     return (
//         <div>
//             <div className={styles.headerContainer}>
//                 <div className={styles.brandText}>Gateway Takeaway</div>
//             </div>
        
//         <div className={styles.container}>
//             <div className={styles.titleText}>User sign up</div>
//             <div className={styles.subtitleText}>Create an account by filling in the details</div>
//             <form> 
//                 <div className={styles.text1}>First Name*</div>
//                 <label>
//                     <input className={styles.textField1} type="text" name="first_name" />
//                 </label>
//                     <div className={styles.text2}>Last Name*</div>
//                 <label>
//                     <input className={styles.textField2} type="text" name="last_name" />
//                 </label>
//                 <div className={styles.text3}>Username*</div>
//                 <label>
//                     <input className={styles.textField3} type="text" name="username" />
//                 </label>
//                 <div className={styles.text4}>Phone number*</div>
//                 <label>
//                     <input className={styles.textField4} type="text" name="phone_number" />
//                 </label>
//                 <div className={styles.text5}>Date of birth*</div>
//                 <label>
//                     <input className={styles.textField5} type="text" name="date_of_birth" />
//                 </label>
//                 <div className={styles.text6}>Address*</div>
//                 <label>
//                     <input className={styles.textField6} type="text" name="address" />
//                 </label>
//                 <div className={styles.text7}>Country*</div>
//                 <label>
//                     <input className={styles.textField7} type="text" name="country" />
//                 </label>
//                 <div className={styles.text8}>Password*</div>
//                 <label>
//                     <input className={styles.textField8} type="text" name="password" />
//                 </label>
//                 <div>
//                 </div>
//             </form>
//         </div>
//         </div>
//     )
// }