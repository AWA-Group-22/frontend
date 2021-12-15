import React, { useContext, useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import styles from "./ResultPage.module.css";
import axios from "axios";
import jwt from 'jsonwebtoken';
import { UserAuthContext } from './Contexts';

export default function ResultPage() {

    const UserAuthContextValue = useContext(UserAuthContext);

    const [restaurants, setRestaurants] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomer();
    }, []);

    let textInput = React.createRef();

    let searchRestaurant = (e) => {
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + UserAuthContextValue.jwt
            },
            method: "post",
            data: {
                restaurant_name: textInput.current.value,
            },
            url: "https://back-end-22-group.herokuapp.com/restaurant/search",
        })
        .then((res) => setRestaurants(res.data));
        console.log(textInput.current.value);
    };
        
    const getCustomer = async () => {
        try {
          const results = await axios.get('https://back-end-22-group.herokuapp.com/customer', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + UserAuthContextValue.jwt
              }
          });
    
          setCustomers(results.data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div>
        <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
            {
                customers.map((customer) => {
                    return <div>
                        Welcome { customer.first_name } { customer.last_name }
                    </div>
                })
            }
            <div className="App">  
                <input ref={textInput} type="text" />  
                <button onClick={searchRestaurant}>Search</button>  
            </div>
        </div>

        {
            restaurants && restaurants.length > 0 ? restaurants.map(restaurant => {
                return <div key={restaurant.restaurant_name}>
                <div className={ styles.restaurantContainer }>
                <img src={restaurant.image} width={336} height={180} />
                <div> {restaurant.restaurant_name} </div>
                <div> {restaurant.address} </div>
                <div> {restaurant.operating_hours} </div>
                <div> {restaurant.type} </div>
                <div> {restaurant.price_level} </div>
            </div>
            </div>;
            }) : "No data yet!"
        }
        </div>
    )
}
