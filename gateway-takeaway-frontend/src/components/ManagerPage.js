import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './ManagerPage.module.css';
import { UserAuthContext } from './Contexts';

export default function ManagerPage(props) {

    const UserAuthContextValue = useContext(UserAuthContext);

    return (
        <div>
            <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
            <Link to="/managerlogin" style={{ color: 'inherit', textDecoration: 'none' }}><button className={styles.logoutButton} onClick={() => UserAuthContextValue.logout()} >Logout</button></Link>
            </div>

            <div className={ styles.title }>Manager page</div>
            <div className={ styles.container1 }>
                <Link to="/managercreateuser" style={{ color: 'inherit', textDecoration: 'none' }}>Create user accounts</Link>
            </div>

            <div className={ styles.container2 }>
                <Link to="/managerestaurants" style={{ color: 'inherit', textDecoration: 'none' }}>Create restaurants</Link>
            </div>

            <div className={ styles.container3 }>
                <Link to="/managerorderpage" style={{ color: 'inherit', textDecoration: 'none' }}>Manage orders</Link>
            </div>

            <div className={ styles.container4 }>
                <Link to="/createmenu" style={{ color: 'inherit', textDecoration: 'none' }}>Create restaurant menus</Link>
            </div>

        </div>
        
    )
}
