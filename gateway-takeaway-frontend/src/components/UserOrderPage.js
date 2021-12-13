import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './UserOrderPage.module.css';
import axios from 'axios';
import { UserAuthContext } from './Contexts';

export default function UserOrderPage(props) {

  const UserAuthContextValue = useContext(UserAuthContext);

  let navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [ changeOrderId, setChangeOrderId ] = useState("");
  const [ changeOrderStatus, setChangeOrderStatus ] = useState("");

  // const getOrders = () => {
  //   axios({
  //     method: "get",
  //     credentials: "include",
  //     headers: { "Content-Type": "application/json" },
  //     url: "https://back-end-22-group.herokuapp.com/customer/order/status",
  //   }).then((res) => {
  //     setOrders(res.data);
  //     console.log(res.data);
  //   });
  // };

  useEffect(() => {
    getCustomer();
  }, []);

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    getOrderHistory();
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

  const getOrders = async () => {
    try {
      const results = await axios.get('https://back-end-22-group.herokuapp.com/customer/order/status', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
          }
      });

      setOrders(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getOrderHistory = async () => {
    try {
      const results = await axios.get('https://back-end-22-group.herokuapp.com/customer/order/history', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
          }
      });

      setOrdersHistory(results.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleChangeOrderStatus = () => {
    axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
        },
        method: "post",
        data: {
            order_id: changeOrderId,
            order_status: changeOrderStatus
        },
        url: "https://back-end-22-group.herokuapp.com/customer/order/confirm",
    })
    .then((res) => console.log(res));
    navigate("/managerpage", { replace: true });
};

  
  const onConfirmOrder = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post('https://back-end-22-group.herokuapp.com/customer/order/confirm', {
        order_status: "Delivered"
      })
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
        {/* <button onClick={ getOrders }>Get orders</button>
        <button onClick={ getOrderHistory }>Get order history</button> */}
      </div>
        <div>
        <div className={ styles.titleText }>Orders</div>
          <div className={ styles.changeOrderStatus }>
              Change a specific order status
              <input placeholder="order id" onChange={e => setChangeOrderId(e.target.value)} />
              <input placeholder="order status" onChange={e => setChangeOrderStatus(e.target.value)} />
                  <button onClick={handleChangeOrderStatus} className={styles.signUpButton}>Change order status</button>
          </div>
          <div>
            {
              orders.map((order, index) => {
                return <div key={index}>
                  <div classname={ styles.orderContainer }>
                  <div className={ styles.orderStatusText }>Current order:  </div>
                  <div className={ styles.restaurantName }> Order status: { order.order_status } </div>
                  <div className={ styles.restaurantName }> Ordered product(S) { order.product_name } </div>
                  </div>
                </div>
              })
            }
            {
              ordersHistory.map((history, index) => {
                return <div key={index}>
                  <div className={ styles.orderHistoryText }>Previous order:</div>
                  <div className={ styles.orderHistoryContainer }>
                    <div> Order status: { history.order_status } </div>
                    <div> Delivered product(s): { history.product_name }</div>
                </div>
                </div>
              })
            }
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
