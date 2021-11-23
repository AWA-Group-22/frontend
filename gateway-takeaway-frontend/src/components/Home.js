import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";

export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
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
}
