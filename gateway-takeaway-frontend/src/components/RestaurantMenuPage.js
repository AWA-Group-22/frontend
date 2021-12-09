import React, { useState, useContext } from 'react';
import burger1 from './burger1.jpg';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './RestaurantMenuPage.module.css';
import axios from 'axios';
import { UserAuthContext } from './Contexts'

export default function RestaurantMenuPage(props) {

    const UserAuthContextValue = useContext(UserAuthContext);

    const { restaurant_id } = useParams();

    const [restaurants, setRestaurants] = useState({});
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    // const getCustomer = () => {
    //     axios({
    //       method: "get",
    //       credentials: "include",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ customers }),
    //       url: "https://back-end-22-group.herokuapp.com/customer",
    //     }).then((res) => {
    //       setCustomers(res.data);
    //       console.log(res.data);
    //     });
    //   };

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

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('https://back-end-22-group.herokuapp.com/customer/order')
            .then((res) => {
                console.log(res.data)
                console.log("Item added to order successfully");
            }).catch((error) => {
                console.log(error)
            });
    };
    
    return (
        <div>
            <div className={styles.headerContainer}>
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
                    <button onClick={ getCustomer }>Get customer data</button>
                    <button onClick={ getRestaurant }>Get restaurant data</button>
                    <button onClick={ getProduct }>Get product data</button>
                <Link to="/shoppingcart" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.shopCart }>Shopping cart</div></Link>
            </div>
            <div>
            <img src={burger1}/>
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
                <div className={ styles.outText }>Price level:{ restaurants.price_level } </div>
            </div>
            {
                products.map((product, index) => {
                    return <div key={index} className={ styles.containeri }>
                        <div className={ styles.foodCategoryContainer }>
                            <div className={ styles.prodNameStyle }>{ product.product_name }</div>
                            <div className={ styles.prodPriceStyle }>{ product.price }€</div>
                            <div className={ styles.prodDescStyle }>{ product.description }</div>
                            {/* <div className={ styles.prodIMGStyle }> { product.product_image }</div> */}
                            <button className={ styles.shopCartButton } onClick={ onSubmit }>🛒</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

//     return (
        // <div>
        //     <div className={styles.headerContainer}>
        //         <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
        //     </div>
        //     <button onClick={ loadData }>Load data</button>
        //     { menuPageData.map(menu => 
        //         <div>
        //         <div className={ styles.deliveryText }>Delivery in 15-25 minutes to #sample address#</div>
        //         <div className={ styles.hourText }>Open today: { menu.restaurant.operating_hours } </div>
        //         <div className={ styles.backButton }>
        //             <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
        //         <div className={ styles.restaurantTitle }> { menu.restaurant_name } </div>
        //         <div className={ styles.restaurantMotto }>Address: { menu.restaurant.address } </div>
        //         <div className={ styles.deliveryCost }>DELIVERY: null</div>
        //         <div className={ styles.minOrder }>MIN. ORDER: 20</div>
        //         <div className={ styles.subContainer }>🙂 8.9</div>
        //         <div className={ styles.outText }>price level: { menu.restaurant.price_level } </div>
        //         <div className={ styles.foodCategory1 }> { menu.category.category_name } </div>
        //         <div className={ styles.foodCategory2 }> { menu.category.category_name } </div>
        //         <div className={ styles.foodCategory3 }> { menu.category.category_name } </div>
        //         <div className={ styles.foodCategoryContainer1 }>
        //             Product:  { menu.product.product_name }
        //             Price:  { menu.product.price } 
        //             Description:  { menu.product.description } 
        //             Image:  { menu.product.product_image }
        //             <button onClick={ handleAddToShopCartButton }>Add to shopping cart</button>
        //         </div>
        //         <div className={ styles.foodCategoryContainer2 }>
        //             Product:  { menu.product.product_name }
        //             Price:  { menu.product.price } 
        //             Description:  { menu.product.description } 
        //             Image:  { menu.product.product_image } 
        //         </div>
        //         <div className={ styles.foodCategoryContainer3 }>
        //             Product:  { menu.product.product_name }
        //             Price:  { menu.product.price } 
        //             Description:  { menu.product.description } 
        //             Image:  { menu.product.product_image } 
        //         </div>
        //         </div>
        //     )}
        // </div>
//     )
// }
