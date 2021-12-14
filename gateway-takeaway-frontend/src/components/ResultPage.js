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
        .then((res) => console.log(res));
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
    
    // const postSearchRestaurant = () => {
    //     axios({
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': 'Bearer ' + UserAuthContextValue.jwt
    //         },
    //         method: "post",
    //         data: {
    //             restaurant_name: restaurants,
    //         },
    //         url: "https://back-end-22-group.herokuapp.com/restaurant/search",
    //     })
    //     .then((res) => console.log(res));
    // };
    

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
            {/* <input placeholder="type a restaurant" onClick={e => setRestaurants(e.target.value)} /> */}
            {/* <button onClick={postSearchRestaurant}> Search </button>
            <button >  </button> */}
        </div>

        {
            restaurants && restaurants.length > 0 ? restaurants.map(restaurant => {
                return <div key={restaurant.restaurant_name}>{restaurant.address}</div>;
            }) : "Testing!"
        }

        {/* <div className={ styles.restaurantContainer }>
                    {restaurants.length ? restaurants : <div> No restaurant yet </div>}
                    <img src={restaurants.image} width={336} height={180} />
                    <div> {restaurants.restaurant_name} </div>
                    <div> {restaurants.address} </div>
                    <div> {restaurants.operating_hours} </div>
                    <div> {restaurants.type} </div>
                    <div> {restaurants.price_level} </div>
                </div>

        {
            restaurants.map((restaurant) => {
                return <div className={ styles.restaurantContainer }>
                    {/* {restaurant.length ? restaurant : <div> No restaurant yet </div>}
                    <img src={restaurant.image} width={336} height={180} />
                    <div> {restaurant.restaurant_name} </div>
                    <div> {restaurant.address} </div>
                    <div> {restaurant.operating_hours} </div>
                    <div> {restaurant.type} </div>
                    <div> {restaurant.price_level} </div>
                </div>
            })
        }
        return(
        <div className='list'>
            {notes.length ? notes : <p>Default Markup</p>}
        </div>
        ); */}
        </div>
    )
}
