import React, { Component } from 'react'
import burger1 from './burger1.jpg';
import { Link } from 'react-router-dom';
import styles from './RestaurantMenuPage.module.css';

export default class RestaurantMenuPage extends Component {
    render() {
        return (
            <div>
                <img src={burger1}/>
                <div className={ styles.deliveryText }>Delivery in 15-25 minutes to #sample address#</div>
                <div className={ styles.hourText }>Open today: #sample time#</div>
                <div className={ styles.backButton }>
                    <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
                <div className={ styles.restaurantTitle }>Example restaurant Oulu</div>
                <div className={ styles.restaurantMotto }>Example motto</div>
                <div className={ styles.deliveryCost }>DELIVERY: sample</div>
                <div className={ styles.minOrder }>MIN. ORDER: sample</div>
                
            </div>
        )
    }
}
