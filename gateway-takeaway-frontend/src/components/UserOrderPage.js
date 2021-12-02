import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './UserOrderPage.module.css';
import axios from 'axios';

export default function UserOrderPage() {

  const [orders, setOrders] = useState([]);
  const [orderData, setOrderData] = useState(null);
  const [ordersHistory, setOrdersHistory] = useState([]);

  // useEffect(() => {
  //   axios.all([
  //     axios.get('https://back-end-22-group.herokuapp.com/customer/order/status'),
  //     axios.get('https://back-end-22-group.herokuapp.com/customer/order/history')
  //   ])
  //   .then(axios.spread(function(result1, result2) {
  //     setOrders(result1.data);
  //     console.log(result1.data);
  //     setOrdersHistory(result2.data);
  //     console.log(result2.data);
  //   }))
  //   .catch(function(error) {
  //     console.log(error);
  //   })
  // }, [])

  const getOrders = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "https://back-end-22-group.herokuapp.com/customer/order/status",
    }).then((res) => {
      setOrderData(res.data);
      console.log(res.data);
    });
  };

  const onConfirmOrder = (e) => {
    e.preventDefault()

    const userObject = {
        order_status: orders.order_status
    };

    axios.post('https://back-end-22-group.herokuapp.com/customer/order/confirm', userObject)
        .then((res) => {
            console.log(res.data)
            console.log("Order confirmed successfully");
        }).catch((error) => {
            console.log(error)
        });

    this.setState({
        order_status: 'Confirmed'
    })
}

  return (
    <div>
      <div className={styles.headerContainer}>
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
      </div>
        <div>
        <div className={ styles.titleText }>Orders</div>
          {
            orders.map((order, index) => {
              return <div key={index}>
                <div className={ styles.orderStatusText }>Current order status: </div>
                <div className={ styles.orderContainer }>
                <div>
                  <button onClick={getOrders}>Load order data</button>
                  {orderData ? <h1>Order status: {orderData.order_status}</h1> : null}
                </div>
                <div className={ styles.restaurantName }> { order.restaurant_name } </div>
                    <button onClick={ onConfirmOrder } className={ styles.buttonStyle }>Confirm received order</button>
                <div className={ styles.statusText }>Example status text lorem ipsum datum el macaron</div>
            </div>
              </div>
            })
          }
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
