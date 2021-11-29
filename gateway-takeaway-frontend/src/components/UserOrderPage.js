import React, { useState } from 'react';
import styles from './UserOrderPage.module.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Constants from './Constants.json';
import jwt from 'jsonwebtoken';

export default function UserOrderPage(props) {

    let navigate = useNavigate();

    const [orderPageData, setorderPageData] = useState([]);
    const [ orderStatusState, setOrderStatusState ] = useState([]);

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
            setorderPageData(results.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleConfirmButton = async (event) => {
        event.preventDefault();
        setOrderStatusState("unreceived");
        try {
            const result = await axios.post(Constants.API_ADDRESS + '/confirmOrder', {
                order_status: 'received'
            })
            console.log(result);
            setOrderStatusState("received");
            setTimeout(() => {
                setOrderStatusState("idle")
                navigate("/home", { replace: true });
            }, 1500);
        } catch (error) {
            console.error(error);
            setOrderStatusState("error");
            setTimeout(() => setOrderStatusState("idle"), 1500);
        }
    };

    return (
        <div>
            <button onClick={ loadData }>Load data</button>
            { orderPageData.map(orders => 
                <div>
                    <div className={ styles.styles.titleText }>Orders</div>
                    <div className={ styles.orderStatusText }>Current order status: { orders.order.order_status } </div>
                    <div className={ styles.orderHistoryText }>Order history:</div>
                    <div className={ styles.orderContainer }>
                        <div className={ styles.restaurantName }> { orders.restaurant.restaurant_name } </div>
                            <button onClick={ handleConfirmButton } className={ styles.buttonStyle }>Confirm received order</button>
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
            )}

        </div>
    )
}
