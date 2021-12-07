import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderDonePage.module.css';

export default function OrderDonePage() {
    return (
        <div className={ styles.container }>
            <div><h1>Thank you for your order!</h1></div>
            <div><Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><button>Back to home</button></Link></div>
        </div>
    )
}
