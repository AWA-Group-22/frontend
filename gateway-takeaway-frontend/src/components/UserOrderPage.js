import React, { useState } from 'react';
import styles from './UserOrderPage.module.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Constants from './Constants.json';

export default function UserOrderPage() {
    return (
        <div>
            <div className={ styles.titleText }>
                Orders
            </div>
            <div className={ styles.orderStatusText }>
                Current order status:
            </div>
            <div className={ styles.orderHistoryText }>
                Order history:
            </div>
            <div className={ styles.orderContainer }>
                <div className={ styles.restaurantName }>
                    Example restaurant
                </div>
                    <button className={ styles.buttonStyle }>Confirm received order</button>
                <div className={ styles.statusText }>
                    Example status text lorem ipsum datum el macaron
                </div>
            </div>
            <div className={ styles.orderHistoryContainer1 }>
                <div className={ styles.restaurantName }>
                    Example restaurant
                </div>
            </div>
            <div className={ styles.orderHistoryContainer2 }>
                <div className={ styles.restaurantName }>
                    Example restaurant
                </div>
            </div>
        </div>
    )
}
