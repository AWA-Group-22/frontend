import React, { Component, useState } from "react"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import jwt from 'jsonwebtoken';
import Constants from './Constants.json';
import axios from "axios";

export default function Home(props) {

  // componentDidMount() {
  //   console.log("Mounted")
  //   axios.get('http://localhost:4000/products')
  //   .then((response) => {
  //     console.log(response);
  //     this.setState({ items: response.data.items });
  //   })
  //   .catch((err) => console.log(err));
  // }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const [homePageData, sethomePageData] = useState([]);

  let decodedJwt = jwt.decode(props.userJwt);
  console.log(decodedJwt);

  const loadData = async () => {
    try {
      const results = await axios.get(Constants.API_ADDRESS + '/todosJWT', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + props.userJwt
          }
      });

      sethomePageData(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.browse}>Browse restaurants</div>
      <Slider {...settings}>
        <div className={styles.container}>
          <div>
            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1_Pub_Desktop_McDeliveryGeneric_HomePage_1168x520.jpg?$Publication_One_Column_Desktop$" width="336" height="180" />
              <div className={styles.restName}>McDonalds Rotuaari</div>
              <div className={styles.restMotto}>Big mac palace</div>
                <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
          </div>
        </div>
        <div className={styles.container2}>
          <img src="https://pannukakkutalo.fi/wp-content/uploads/2017/03/pannukakkutalo-makea-300x251.jpg" width="336" height="180" />
            <div className={styles.restName}>pannukakkutalo Oulu</div>
            <div className={styles.restMotto}>Very good pancakes</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container3}>
          <img src="https://hailong.fi/wp-content/uploads/2020/12/sushi-300x300.jpeg" width="336" height="180" />
            <div className={styles.restName}>Hai Long Oulu</div>
            <div className={styles.restMotto}>Good sushi better prices</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container}>
        <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
            <div className={styles.restName}>McDonalds Rotuaari</div>
            <div className={styles.restMotto}>Big mac palace</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container2}>
        <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
            <div className={styles.restName}>McDonalds Rotuaari</div>
            <div className={styles.restMotto}>Big mac palace</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container3}>
        <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
            <div className={styles.restName}>McDonalds Rotuaari</div>
            <div className={styles.restMotto}>Big mac palace</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
      </Slider>
    </div>
  );
}










/*
import React, { Component, useState } from "react"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import jwt from 'jsonwebtoken';
import Constants from './Constants.json';
import axios from "axios";

export default function Home(props) {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const [homePageData, sethomePageData] = useState([]);

  let decodedJwt = jwt.decode(props.userJwt);
  console.log(decodedJwt);

  const loadData = async () => {
    try {
      const results = await axios.get(Constants.API_ADDRESS + '/todosJWT', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + props.userJwt
          }
      });

      sethomePageData(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.carousel}>
      
      <div className={styles.browse}>Browse restaurants</div>
      <Slider {...settings}>
        <div className={styles.container}>
          <div>
            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1_Pub_Desktop_McDeliveryGeneric_HomePage_1168x520.jpg?$Publication_One_Column_Desktop$" width="336" height="180" />
              <div className={styles.restName}>McDonalds Rotuaari</div>
              <div className={styles.restMotto}>Big mac palace</div>
                <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
          </div>
        </div>
        <div className={styles.container2}>
          <img src="https://pannukakkutalo.fi/wp-content/uploads/2017/03/pannukakkutalo-makea-300x251.jpg" width="336" height="180" />
            <div className={styles.restName}>pannukakkutalo Oulu</div>
            <div className={styles.restMotto}>Very good pancakes</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container3}>
          <img src="https://hailong.fi/wp-content/uploads/2020/12/sushi-300x300.jpeg" width="336" height="180" />
            <div className={styles.restName}>Hai Long Oulu</div>
            <div className={styles.restMotto}>Good sushi better prices</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container}>
        <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
            <div className={styles.restName}>McDonalds Rotuaari</div>
            <div className={styles.restMotto}>Big mac palace</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container2}>
        <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
            <div className={styles.restName}>McDonalds Rotuaari</div>
            <div className={styles.restMotto}>Big mac palace</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
        <div className={styles.container3}>
        <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
            <div className={styles.restName}>McDonalds Rotuaari</div>
            <div className={styles.restMotto}>Big mac palace</div>
              <Link to="restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
        </div>
      </Slider>
    </div>
  );
}
*/