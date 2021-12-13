import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderDonePage.module.css';

export default function OrderDonePage() {
    return (
        <div className={styles.headerContainer}>
            <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
        <div className={ styles.container }>
            <div><h1>Thank you for your order!</h1></div>
            <div><Link to="/orders" style={{ color: 'inherit', textDecoration: 'none' }}><button>Go to orders page</button></Link></div>
        </div>
        </div>
    )
}
