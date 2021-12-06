import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './UserOrderPage.module.css';
import axios from 'axios';

export default function UserOrderPage() {

  const [orders, setOrders] = useState([]);
  const [ordersHistory, setOrdersHistory] = useState([]);

  const getOrders = () => {
    axios({
      method: "get",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      url: "https://back-end-22-group.herokuapp.com/customer/order/status",
    }).then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  };

  const getOrderHistory = () => {
    axios({
      method: "get",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      url: "https://back-end-22-group.herokuapp.com/customer/order/history",
    }).then((res) => {
      setOrdersHistory(res.data);
      console.log(res.data);
    });
  };

  const onConfirmOrder = (e) => {
    e.preventDefault()

    const userObject = {
        order_status: orders.order_status
    };

    axios({
      method: "post",
      withCredentials: "include",
      url: "https://back-end-22-group.herokuapp.com/customer/order/confirm" + userObject,
    }).then((res) => {
      console.log(res.data)
      console.log("Order confirmed successfully");
    });
      this.setState({
      order_status: 'Confirmed'
    });
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
        <button onClick={ getOrders }>Get orders</button>
        <button onClick={ getOrderHistory }>Get order history</button>
      </div>
        <div>
        <div className={ styles.titleText }>Orders</div>
          <div>
                <div className={ styles.orderStatusText }>Current order status: </div>
                <div className={ styles.orderContainer }>
                <div className={ styles.statusText }> Order status: { orders.order_status } </div>
                <div className={ styles.restaurantName }> { orders.restaurant_name } </div>
                    <button onClick={ onConfirmOrder } className={ styles.buttonStyle }>Confirm received order</button>
            </div>
              </div>
            <div className={ styles.orderHistoryText }>Order history:</div>

            <div className={ styles.orderHistoryContainer }>
                <div className={ styles.historyRestaurantName }>Example restaurant</div>
            </div>
      </div>
    </div>
  )
}




// export default function UserOrderPage(props) {

//     return (
        // <div>
        //     <div className={styles.headerContainer}>
        //     <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
        //     </div>
        //         <div>
        //             <div className={ styles.styles.titleText }>Orders</div>
        //             <div className={ styles.orderStatusText }>Current order status: </div>
        //             <div className={ styles.orderHistoryText }>Order history:</div>
        //             <div className={ styles.orderContainer }>
        //                 <div className={ styles.restaurantName }></div>
        //                     <button className={ styles.buttonStyle }>Confirm received order</button>
        //                 <div className={ styles.statusText }>
        //                     Example status text lorem ipsum datum el macaron
        //                 </div>
        //             </div>
        //             <div className={ styles.orderHistoryContainer1 }>
        //                 <div className={ styles.restaurantName }>
        //                     Example restaurant
        //                 </div>
        //             </div>
        //             <div className={ styles.orderHistoryContainer2 }>
        //                 <div className={ styles.restaurantName }>
        //                     Example restaurant
        //                 </div>
        //             </div>
        //         </div>
        // </div>
//     )
// }
