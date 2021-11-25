import React, { useState } from 'react';
import styles from './ManagerOrderPage.module.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Constants from './Constants.json';

export default function ManagerOrderPage() {
    return (
        <div>
            <div className={ styles.titleText }>
                Manager order page
            </div>
            <div className={ styles.orderStatusText }>
                Current user orders:
            </div>
            <div className={ styles.buttonContainer }>
                <button className={ styles.buttonStyleReceived }>Received</button>
                <button className={ styles.buttonStylePreparing }>Preparing</button>
                <button className={ styles.buttonStyleRFD}>Ready for delivery</button>
                <button className={ styles.buttonStyleDelivering }>Delivering</button>
                <button className={ styles.buttonStyleDelivered }>Delivered</button>
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
