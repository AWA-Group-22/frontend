import React, { useState, useEffect, useContext } from 'react';
import styles from './ManagerOrderPage.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from './Contexts';

export default function ManagerOrderPage() {

    const UserAuthContextValue = useContext(UserAuthContext);

    let navigate = useNavigate();

    const [ ManagerOrderPageData, setManagerOrderPageData ] = useState([]);
    const [ orders, setOrders ] = useState([]);
    const [ ordersHistory, setOrdersHistory ] = useState([]);

    const [ changeOrderId, setChangeOrderId ] = useState("");
    const [ changeOrderStatus, setChangeOrderStatus ] = useState("");

    useEffect(() => {
        getOrders();
    }, []);

    useEffect(() => {
        getOrderHistory();
    }, []);

    const getOrders = async () => {
        try {
          const results = await axios.get('https://back-end-22-group.herokuapp.com/manager/order/modify/status', {
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
          const results = await axios.get('https://back-end-22-group.herokuapp.com/manager/order/history', {
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
            url: "https://back-end-22-group.herokuapp.com/manager/order/modify/status",
        })
        .then((res) => console.log(res));
        // navigate("/managerorderpage", { replace: true });
        // window.location.reload(false);
    };

    return (
        <div>
            <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
                {/* <button onClick={ getOrders }>Get orders</button> */}
                {/* <button onClick={ getOrderHistory }>Get order history</button> */}
                <div className={ styles.backButton }>
                    <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
            </div>
                <div>
                    <div className={ styles.titleText }>Manager order page</div>
                    <div className={ styles.changeOrderStatus }>
                        Change a specific order status
                        <input placeholder="order id" onChange={e => setChangeOrderId(e.target.value)} />
                        <input placeholder="order status" onChange={e => setChangeOrderStatus(e.target.value)} />
                            <button onClick={handleChangeOrderStatus} className={styles.signUpButton}>Change order status</button>
                            <button onClick={() => window.location.reload(false)}>Refresh page</button>
                    </div>
                    <div className={ styles.currentOrderText }>Current user orders:</div>
                            {/* {
                    orders && orders.length > 0 ? orders.map(order => {
                        return <div key={order.order_id}>
                            <div className={ styles.currentOrderContainer }>
                            <div className={ styles.currentOrderId }> Order id: { order.order_id } </div>
                            <div className={ styles.currentOrderStatus }> Order status: { order.order_status } </div>
                            <div className={ styles.currentOrderProduct }> Ordered product(s): </div>
                            <div className={ styles.currentProductId }> Product id: { order.product_id } </div>
                            <div className={ styles.currentProductName }> Product name: { order.product_name } </div>
                            </div>
                        </div>;
                    }) : "No data yet!"
                    } */}
                {
                    orders && orders.length > 0 ? orders.map(order => {
                        return <div key={order.order_id}>
                            <div className={ styles.currentOrderContainer }>
                                <div className={ styles.currentOrderId }> Order id: { order.order_id } </div>
                                <div className={ styles.currentOrderStatus }> Order status: { order.order_status } </div>
                                <div className={ styles.currentOrderProduct }> Ordered product(s): </div>
                                <div className={ styles.currentProductId }> Product id: { order.product_id } </div>
                                <div className={ styles.currentProductName }> Product name: { order.product_name } </div>
                            </div>
                        </div>;
                    }) : "No data yet!"
                }
                    <div className={ styles.historyDivText }> Order history: </div>
                {
                    ordersHistory && ordersHistory.length > 0 ? ordersHistory.map(history => {
                        return <div key={history.order_id} className={ styles.bigOrderContainer }>
                            <div className={ styles.orderContainer }>
                            <div className={ styles.currentOrderId }> Order id: { history.order_id } </div>
                                <div className={ styles.currentOrderStatus }> Order status: { history.order_status } </div>
                                    {/* TODO: backend get order id */}
                                <div className={ styles.currentOrderProduct }> Ordered product(s): </div>
                                <div className={ styles.currentProductId }> Product id: { history.product_id } </div>
                                <div className={ styles.currentProductName }> Product name: { history.product_name } </div>
                            </div>
                        </div>;
                    }) : "No data yet!"
                }

                </div>
            
        </div>
    )
}