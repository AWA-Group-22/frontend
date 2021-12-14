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
      console.log(results.data);
    } catch (err) {
      // console.log(err.response.data.message);
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
        },
        url: "https://back-end-22-group.herokuapp.com/customer/order/confirm",
    })
    .then((res) => console.log(res));
    navigate("/orders", { replace: true });
};

  return (
    <div>
      <div className={styles.headerContainer}>
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
        {/* <button onClick={ getOrders }>Get orders</button>
        <button onClick={ getOrderHistory }>Get order history</button> */}
      </div>
        <div>
          {
            customers.map((customer, index) => {
              return <div key={index}>
                <div className={ styles.titleText }>Orders of { customer.first_name } { customer.last_name } </div>
              </div>
            })
          }
        
          <div className={ styles.changeOrderStatus }>
              Confirm order with status "Delivered"
              <input placeholder="order id" onChange={e => setChangeOrderId(e.target.value)} />
                  <button onClick={handleChangeOrderStatus} className={styles.buttonStyle}>Confirm order Delivered</button>
                  <button onClick={() => window.location.reload(false)}>Refresh page</button>
          </div>
          <div>
          <div className={ styles.currentOrderText }>Current orders:</div>
            {
              orders.map((order, index) => {
                return <div key={index}>
                    <div className={ styles.currentOrderContainer }>
                      <div className={ styles.currentOrderId }> Order id: { order.order_id } </div>
                      <div className={ styles.currentOrderStatus }> Order status: { order.order_status } </div>
                      <div className={ styles.currentOrderProduct }> Ordered product(s): </div>
                      <div className={ styles.currentProductId }> Product id: { order.product_id } </div>
                      <div className={ styles.currentProductName }> Product name: { order.product_name } </div>
                    </div>
                </div>
              })
            }
          <div className={ styles.historyDivText }> Order history: </div>              
            {
              ordersHistory.map((history, index) => {                    
                return <div key={index} className={ styles.bigOrderContainer }>
                  <div className={ styles.orderContainer }>
                  <div className={ styles.currentOrderId }> Order id: { history.order_id } </div>
                    <div className={ styles.currentOrderStatus }> Order status: { history.order_status } </div>
                    <div className={ styles.currentOrderProduct }> Ordered product(s): </div>
                    <div className={ styles.currentProductId }> Product id: { history.product_id } </div>
                    <div className={ styles.currentProductName }> Product name: { history.product_name } </div>
                  </div>
                  </div>
              })
            }
        </div>
        </div>
    </div>
  )
}