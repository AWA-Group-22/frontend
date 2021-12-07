import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './ManagerPage.module.css'

export default class ManagerPage extends Component {
    render() {
        return (
            <div>
                <div className={styles.headerContainer}>
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link></div>
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
}
