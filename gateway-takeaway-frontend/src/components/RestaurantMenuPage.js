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
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
                <div className={ styles.restaurantTitle }>Example restaurant Oulu</div>
                <div className={ styles.restaurantMotto }>Example motto</div>
                <div className={ styles.deliveryCost }>DELIVERY: 7.90</div>
                <div className={ styles.minOrder }>MIN. ORDER: 20</div>
                <div className={ styles.subContainer }>🙂 8.9</div>
                <div className={ styles.outText }>out of 10</div>
                <div className={ styles.foodCategory1 }>Category1</div>
                <div className={ styles.foodCategory2 }>Category2</div>
                <div className={ styles.foodCategory3 }>Category3</div>
                <div className={ styles.foodCategoryContainer1 }>asdasd</div>
                <div className={ styles.foodCategoryContainer2 }>asdasd</div>
                <div className={ styles.foodCategoryContainer3 }>asdasd</div>
            </div>
        )
    }
}
