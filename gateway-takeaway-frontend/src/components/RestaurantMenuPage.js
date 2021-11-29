import React, { useState } from 'react'
import burger1 from './burger1.jpg';
import { Link } from 'react-router-dom';
import styles from './RestaurantMenuPage.module.css';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Constants from './Constants.json';

export default function RestaurantMenuPage(props) {

    const [menuPageData, setmenuPageData] = useState([]);

    let decodedJwt = jwt.decode(props.userJwt);
    console.log(decodedJwt);

    const loadData = async () => {
        try {
            const results = await axios.get(Constants.API_ADDRESS + '/RestaurantJWT', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + props.userJwt
                }
            });
            setmenuPageData(results.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button onClick={ loadData }>Load data</button>
            { menuPageData.map(menu => 
                <div>
                <div className={ styles.deliveryText }>Delivery in 15-25 minutes to #sample address#</div>
                <div className={ styles.hourText }>Open today: { menu.restaurant.operating_hours } </div>
                <div className={ styles.backButton }>
                    <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
                <div className={ styles.restaurantTitle }> { menu.restaurant_name } </div>
                <div className={ styles.restaurantMotto }>Address: { menu.restaurant.address } </div>
                <div className={ styles.deliveryCost }>DELIVERY: null</div>
                <div className={ styles.minOrder }>MIN. ORDER: 20</div>
                <div className={ styles.subContainer }>🙂 8.9</div>
                <div className={ styles.outText }>price level: { menu.restaurant.price_level } </div>
                <div className={ styles.foodCategory1 }> { menu.category.category_name } </div>
                <div className={ styles.foodCategory2 }> { menu.category.category_name } </div>
                <div className={ styles.foodCategory3 }> { menu.category.category_name } </div>
                <div className={ styles.foodCategoryContainer1 }>
                    Product:  { menu.product.product_name }
                    Price:  { menu.product.price } 
                    Description:  { menu.product.description } 
                    Image:  { menu.product.product_image } 
                </div>
                <div className={ styles.foodCategoryContainer2 }>
                    Product:  { menu.product.product_name }
                    Price:  { menu.product.price } 
                    Description:  { menu.product.description } 
                    Image:  { menu.product.product_image } 
                </div>
                <div className={ styles.foodCategoryContainer3 }>
                    Product:  { menu.product.product_name }
                    Price:  { menu.product.price } 
                    Description:  { menu.product.description } 
                    Image:  { menu.product.product_image } 
                </div>
                </div>
            )}
        </div>
    )
}
