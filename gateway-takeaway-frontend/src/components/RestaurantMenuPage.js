import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './RestaurantMenuPage.module.css';
import axios from 'axios';

export default function RestaurantMenuPage() {

    const { restaurant_id } = useParams();

    const [restaurants, setRestaurants] = useState({});
    const [customers, setCustomers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.all([
            axios.get('http://localhost:4000/restaurant/' + restaurant_id),
            axios.get('http://localhost:4000/customer'),
            axios.get('https://back-end-22-group.herokuapp.com/restaurant/menu'),
            axios.get('https://back-end-22-group.herokuapp.com/restaurant/menu/' + restaurant_id)
        ])
            .then(axios.spread(function(result1, result2, result3, result4) {
                setRestaurants(result1.data[0]);
                console.log(result1.data[0]);
                setCustomers(result2.data);
                setCategories(result3.data);
                setProducts(result4.data);
            }))
            .catch(function(error) {
                console.log(error);
            })
    },[])

    const onSubmit = (e) => {
        e.preventDefault()

        const userObject = {
            user_id: customers.user_id,
            product_id: products.product_id,
            order_status: this.state.order_status
        };

        axios.post('http://localhost:4000/customer/order', userObject)
            .then((res) => {
                console.log(res.data)
                console.log("Item added to order successfully");
            }).catch((error) => {
                console.log(error)
            });

        this.setState({
            user_id: '',
            product_id: '',
            order_status: '',
        })
    }
    
    return (
        <div>
        <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
        </div>
        {/* {
            customers.map((customer) => {
                return <div>
                    <div className={ styles.deliveryText } key={customer}>Delivery in 15-25 minutes to { customer.address }</div>
                </div>
            })
        } */}
            <div>
            <div className={ styles.hourText }>Open today: { restaurants.operating_hours } </div>
            <div className={ styles.backButton }>
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
            <div className={ styles.restaurantTitle }> { restaurants.restaurant_name } </div>
            <div className={ styles.restaurantMotto }>Address: { restaurants.address } </div>
            <div className={ styles.deliveryCost }>DELIVERY: null</div>
            <div className={ styles.minOrder }>MIN. ORDER: 20</div>
            <div className={ styles.subContainer }></div>
            <div className={ styles.outText }>{ restaurants.price_level } </div>
                </div>
        {
            categories.map((category, index) => {
                return <div key={index}>
                    <div className={ styles.foodCategory }> { category.category_name } </div>
                </div>
            })
        }
        {
            products.map((product, index) => {
                return <div key={index}>
                    <div className={ styles.foodCategoryContainer }>
                        { product.product_name }
                        { product.price } 
                        { product.description } 
                        { product.product_image }
                        <button onClick={ onSubmit }>Add to shopping cart</button>
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
