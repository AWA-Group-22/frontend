import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './RestaurantMenuPage.module.css';
import axios from 'axios';
import { UserAuthContext } from './Contexts'

export default function RestaurantMenuPage(props) {

    let navigate = useNavigate();

    const UserAuthContextValue = useContext(UserAuthContext);

    const { restaurant_id } = useParams();

    const [restaurants, setRestaurants] = useState({});
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
    getCustomer();
    }, []);

    useEffect(() => {
    getRestaurant();
    }, []);

    useEffect(() => {
    getProduct();
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

    const getRestaurant = () => {
        axios({
            method: "get",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ restaurants }),
            url: "https://back-end-22-group.herokuapp.com/restaurant/" + restaurant_id,
        }).then((res) => {
            setRestaurants(res.data[0]);
            console.log(res.data[0]);
        });
    };

    const getProduct = () => {
        axios({
            method: "get",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ products }),
            url: "https://back-end-22-group.herokuapp.com/restaurant/menu/" + restaurant_id,
        }).then((res) => {
            setProducts(res.data);
            console.log(res.data);
        });
    };    

    const onSubmit = () => {
          navigate("/shoppingcart", { replace: true });
    };
    
    return (
        <div>
            <div className={styles.headerContainer}>
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
            {
                customers.map((customer) => {
                    return <div>
                        { customer.first_name } { customer.last_name }
                    </div>
                })
            }
                <Link to="/shoppingcart" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.shopCart }>Shopping cart</div></Link>
            </div>
            <div>
            <img src={ restaurants.image } width="1900" height="590" />
            {
                customers.map((customer) => {
                    return <div className={ styles.deliveryText }>Delivery in 15-25 minutes to { customer.address }</div>
                })
            }
            </div>
            <div>
                <div className={ styles.hourText }>Open today: { restaurants.operating_hours } </div>
                <div className={ styles.backButton }>
                    <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
                <div className={ styles.restaurantTitle }> { restaurants.restaurant_name } </div>
                <div className={ styles.restaurantMotto }>Address: { restaurants.address } </div>
                <div className={ styles.deliveryCost }>DELIVERY: 7.90€</div>
                <div className={ styles.minOrder }>MIN. ORDER: 20€</div>
                <div className={ styles.subContainer }></div>
                <div className={ styles.outText }>Price level: { restaurants.price_level } </div>
            </div>
            {
                products.map((product, index) => {
                    return <div key={index} className={ styles.containeri }>
                        <div className={ styles.foodCategoryContainer }>
                            <div>
                                <img src={ product.product_image } width="250" height="150" />
                                <div className={ styles.prodNameStyle }>{ product.product_name }</div>
                                <div className={ styles.prodPriceStyle }>{ product.price }€</div>
                                <div className={ styles.prodDescStyle }>{ product.description }</div>
                                <div> Product id: { product.product_id } (type in the shopping cart to order) </div>
                                {/* <div className={ styles.prodIMGStyle }> { product.product_image }</div> */}
                                <button className={ styles.shopCartButton } onClick={ onSubmit }> Go to shopping cart 🛒</button>

                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
