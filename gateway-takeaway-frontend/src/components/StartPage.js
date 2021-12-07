import React from 'react'
import { Link } from 'react-router-dom';
import styles from './StartPage.module.css';

export default function StartPage() {
    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.brandText}>Gateway Takeaway</div>
            </div>
            <div className={ styles.titleText }></div>
            <div className={ styles.subTitle }>Login or create an account to proceed</div>

            <div className={ styles.container1 }><button className={ styles.buttonStyle }><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link></button></div>
            <div className={ styles.container2 }><button className={ styles.buttonStyle }><Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign up</Link></button></div>
                
        </div>
    )
}
