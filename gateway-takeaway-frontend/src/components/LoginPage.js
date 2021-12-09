import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import axios from 'axios';

export default function LoginPage() {

    let navigate = useNavigate();

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        axios({
            method: "post",
            headers: { "Content-Type": "application/json" },
            auth: { username: loginUsername, password: loginPassword },
            url: "https://back-end-22-group.herokuapp.com/login",
        })
        .then((res) => console.log(res));
            navigate('/home');
    };

    return (
        <div>
            <div className={styles.headerContainer}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
            <div className={styles.container}>
                <div className={styles.titleText}>Sign in</div>
                <div className={styles.subtitleText}>Login with your account</div>
                <div className={styles.lowerText}>Don't have an account?
                    <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link></div>
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

// import React, { useState, Component } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from './LoginPage.module.css';

// export default class LoginPage extends Component {

//     constructor(props) {
//         super(props)

//         this.onChangeUserName = this.onChangeUserName.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             username: '',
//             password: ''
//         }
//     }

//     onChangeUserName(e) {
//         this.setState({ username: e.target.value })
//     }

//     onChangePassword(e) {
//         this.setState({ password: e.target.value })
//     }

//     onSubmit(e) {
//         e.preventDefault()

//         const userObject = {
//             username: this.state.username,
//             password: this.state.password
//         };

//         axios.post('https://back-end-22-group.herokuapp.com/login', userObject)
//             .then((res) => {
//                 console.log(res.data)
//             }).catch((error) => {
//                 console.log(error)
//             });

//         this.setState({ username: '', password: '' })
//     }

    // render() {
    //     return (
            // <div className={styles.headerContainer}>
            //     <div className={styles.brandText}>Gateway Takeaway</div>
            //     <div className={styles.container}>
            //     <div className={styles.titleText}>Sign in</div>
            //     <div className={styles.subtitleText}>Login with your account</div>
            //     <div className={styles.lowerText}>Don't have an account?
            //         <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link></div>

            //     <form onSubmit={this.onSubmit}>
            //         <div className="form-group">
            //             <label className={styles.emailText}>Username</label>
            //             <input className={styles.emailField} type="text" value={this.state.username} onChange={this.onChangeUserName}/>
            //         </div>
            //         <div className="form-group">
            //             <label className={styles.passwordText}>Password</label>
            //             <input className={styles.passwordField} type="text" value={this.state.password} onChange={this.onChangePassword}/>
            //         </div>
            //         <div className="form-group">
            //             <input className={styles.signInButton} type="submit" value="Sign in"/>
            //                 <Link to="/home" style={{ textDecoration: 'none' }}></Link>
            //         </div>
            //     </form>
            //     </div>
            // </div>
    //     )
    // }
// }













































































/*
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
                navigate('/home', { replace: include });
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




*/

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
