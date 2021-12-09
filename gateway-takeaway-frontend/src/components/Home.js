import React, { Component, useState } from "react"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import axios from "axios";
import SearchView from "./SearchView";
import jwt from 'jsonwebtoken';

export default class Home extends Component {

  constructor(props) {
      super(props)
      this.state = {
      restaurants: [],
    }
  }

  componentDidMount() {
    axios.get('https://back-end-22-group.herokuapp.com/restaurants')
        .then(res => {
          this.setState({ restaurants: res.data });
        })
        .catch(function(error) {
          console.log(error);
        })
  }

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
      <div>
      <div className={styles.headerContainer}>
      <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
      <Link to="/orders" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText2 }>Orders</div></Link>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><button>Logout</button></Link>
      </div>
      <div className={styles.carousel}>
        <div className={styles.browse}>Browse restaurants</div>
        <Slider {...settings}>
          {
            this.state.restaurants.map((restaurant) => { 
              return <div className={styles.container}>
              <div>
                  {/* <input type="image" src={"data:image/png;base64," + restaurant.image} width="336" height="180"/> */}
                  <img src={"data:image/png;base64," + restaurant.image } width="336" height="180" />
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
}



/*
<img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1_Pub_Desktop_McDeliveryGeneric_HomePage_1168x520.jpg?$Publication_One_Column_Desktop$" width="336" height="180" />

<img className="blob-to-image" src={"data:image/png;base64," + restaurant.image} width="336" height="180"></img>

*/










// export default function Home(props) {

//   const [homePageData, sethomePageData] = useState([]);

//   let decodedJwt = jwt.decode(props.userJwt);
//   console.log(decodedJwt);

//   const loadData = async () => {
//     try {
//       const results = await axios.get(Constants.API_ADDRESS + '/todosJWT', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + props.userJwt
//           }
//       });

//       sethomePageData(results.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
    // <div>

    // <div className={styles.headerContainer}>
    // <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
    // <Link to="/orders" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText2 }>Orders</div></Link>
    // </div>
    // <div className={styles.carousel}>
    //   <div className={styles.browse}>Browse restaurants</div>
    //   <Slider {...settings}>
    //     <div className={styles.container}>
    //       <div>
    //         <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1_Pub_Desktop_McDeliveryGeneric_HomePage_1168x520.jpg?$Publication_One_Column_Desktop$" width="336" height="180" />
    //           <div className={styles.restName}>McDonalds Rotuaari</div>
    //           <div className={styles.restMotto}>Big mac palace</div>
    //             <Link to="/restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
    //       </div>
    //     </div>
    //     <div className={styles.container2}>
    //       <img src="https://pannukakkutalo.fi/wp-content/uploads/2017/03/pannukakkutalo-makea-300x251.jpg" width="336" height="180" />
    //         <div className={styles.restName}>pannukakkutalo Oulu</div>
    //         <div className={styles.restMotto}>Very good pancakes</div>
    //           <Link to="/restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
    //     </div>
    //     <div className={styles.container3}>
    //       <img src="https://hailong.fi/wp-content/uploads/2020/12/sushi-300x300.jpeg" width="336" height="180" />
    //         <div className={styles.restName}>Hai Long Oulu</div>
    //         <div className={styles.restMotto}>Good sushi better prices</div>
    //           <Link to="/restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
    //     </div>
    //     <div className={styles.container}>
    //     <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
    //         <div className={styles.restName}>McDonalds Rotuaari</div>
    //         <div className={styles.restMotto}>Big mac palace</div>
    //           <Link to="/restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
    //     </div>
    //     <div className={styles.container2}>
    //     <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
    //         <div className={styles.restName}>McDonalds Rotuaari</div>
    //         <div className={styles.restMotto}>Big mac palace</div>
    //           <Link to="/restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
    //     </div>
    //     <div className={styles.container3}>
    //     <img src="https://www.poppamies.fi/wp-content/uploads/2016/06/beercanbaconburger.jpg" width="336" height="180" />
    //         <div className={styles.restName}>McDonalds Rotuaari</div>
    //         <div className={styles.restMotto}>Big mac palace</div>
    //           <Link to="/restaurantmenu"><button className={ styles.buttonStyle }>Order now</button></Link>
    //     </div>
    //   </Slider>
    // </div>
    // </div>
//   );
// }










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