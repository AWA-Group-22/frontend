import React, { useContext, useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import axios from "axios";
import jwt from 'jsonwebtoken';
import { UserAuthContext } from './Contexts';

export default function Home(props) {

  const UserAuthContextValue = useContext(UserAuthContext);

  const [restaurants, setRestaurants] = useState([]);
  const [customers, setCustomers] = useState([]);

  const carouselSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  useEffect(() => {
    axios.get('https://back-end-22-group.herokuapp.com/restaurants')
      .then(res => {
        setRestaurants(res.data);
        console.log(res.data);
      })
  }, []);

  useEffect(() => {
    getCustomer();
  }, []);

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
      <Link to="/resultpage" style={{ color: 'inherit', textDecoration: 'none' }}><div>Search for restaurants</div></Link>
      <Link to="/orders" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText2 }>Orders</div></Link>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><button className={styles.logoutButton} onClick={() => UserAuthContextValue.logout()} >Logout</button></Link>
    </div>
    
    <div className={styles.carousel}>
      <div className={styles.browse}>Browse restaurants</div>
      <Slider {...carouselSettings}>
        {
          restaurants.map((restaurant) => { 
            return <div className={styles.container}>
            <div>
                <img src={ restaurant.image } width={336} height={180} />
                <div className={styles.restName}>{restaurant.restaurant_name}</div>
                <div className={styles.restMotto}>{restaurant.operating_hours}</div>
                  <Link to={{ pathname: "/restaurantmenu/" + restaurant.restaurant_id}}><button className={ styles.buttonStyle }>Order now</button></Link>
            </div>
          </div>
            })
        }
      </Slider>
    </div>
    </div>
  )
}