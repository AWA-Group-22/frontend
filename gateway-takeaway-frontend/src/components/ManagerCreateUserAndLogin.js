import React from 'react'
import reactDom from 'react-dom'
import { Link } from 'react-router-dom'
import styles from './ManagerCreateUserAndLogin.module.css'
import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'

export default function ManagerCreateUserAndLogin() {
    return (
        <div>
            <div className={ styles.titleText }>Manager page / create user accounts and login</div>
            <div className={ styles.container1 }><button className={ styles.buttonStyle }><Link to="/managercreateuser" style={{ color: 'inherit', textDecoration: 'none' }}>Manager user creation</Link></button></div>
            <div className={ styles.container2 }> Login with user account
                <select className={ styles.dropDown }>
                    <option value="kalle kanaoja">Kalle Kanaoja</option>
                    <option value="jaana savela">Jaana Savela</option>
                    <option selected value="kari kivelä">Kari Kivelä</option>
                    <option value="janne jylkkä">Janne Jylkkä</option>
                </select>
            </div>
                
        </div>
    )
}
