import React, { useState, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './ManagerCreateUserPage.module.css';

export default class ManagerCreateUserPage extends Component {
    
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
        this.onChangeRoot = this.onChangeRoot.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            address: '',
            phone_number: '',
            country: '',
            date_of_birth: '',
            root: ''
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

    onChangeRoot(e) {
        this.setState({ root: e.target.value })
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

        axios.post('https://back-end-22-group.herokuapp.com/register', userObject)
            .then((res) => {
                console.log(res.data)
                console.log("User account creation was successful");
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
            root: '' 
        })
    }

    render() {
        return (
            <div>
            <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>            </div>
            <div className={styles.container}>
            <div className={styles.titleText}>Manager: user creation</div>
            <div className={styles.subtitleText}>Create an account by filling in the user's details</div>
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
                        <label className={styles.text9}>Root*</label>
                        <input className={styles.textField9} type="text" value={this.state.root} onChange={this.onChangeRoot} />
                    </div>
                    <div className="form-group">
                        <input className={styles.signInButton} type="submit" value="Create a User" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

/*
export default function ManagerCreateUserPage() {
    let navigate = useNavigate();
    const [ CreateUserProcessState, setCreateUserProcessState ] = useState("idle");

    const handleCreateUserSubmit = async (event) => {
        event.preventDefault();
        setCreateUserProcessState("processing");
        try {
        const result = await axios.post(Constants.API_ADDRESS + '/registerForJWT', {
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
            navigate("/managerpage", { replace: true });
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
        <div>
            <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>            </div>
        
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
        </div>
    )
}
*/