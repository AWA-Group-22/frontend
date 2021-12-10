import React, { useState, useEffect, useContext } from 'react';
import styles from './ManagerOrderPage.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from './Contexts';

export default function ManagerOrderPage() {

    const UserAuthContextValue = useContext(UserAuthContext);

    let navigate = useNavigate();

    const [ManagerOrderPageData, setManagerOrderPageData] = useState([]);
    const [orders, setOrders] = useState([]);
    const [ordersHistory, setOrdersHistory] = useState([]);

    // useEffect(() => {
    //     getOrders();
    // }, []);

    useEffect(() => {
        getOrderHistory();
    }, []);
  
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

    const handleButtonPreparing = () => {
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + UserAuthContextValue.jwt
            },
            method: "post",
            data: {
                order_status: "Preparing"
            },
            url: "https://back-end-22-group.herokuapp.com/manager/order/modify/status",
        })
        .then((res) => console.log(res));
    };

    const handleButtonRFD = () => {
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + UserAuthContextValue.jwt
            },
            method: "post",
            data: {
                order_status: "Ready for Delivery"
            },
            url: "https://back-end-22-group.herokuapp.com/manager/order/modify/status",
        })
        .then((res) => console.log(res));
    };

    const handleButtonDelivering = () => {
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + UserAuthContextValue.jwt
            },
            method: "post",
            data: {
                order_status: "Delivering"
            },
            url: "https://back-end-22-group.herokuapp.com/manager/order/modify/status",
        })
        .then((res) => console.log(res));
    };

    const handleButtonDelivered = () => {
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + UserAuthContextValue.jwt
            },
            method: "post",
            data: {
                order_status: "Delivered"
            },
            url: "https://back-end-22-group.herokuapp.com/manager/order/modify/status",
        })
        .then((res) => console.log(res));
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
                    {
                        // TODO: get all customer orders
                        ordersHistory.map((history, index) => {
                            return <div key={index} className={ styles.bigOrderContainer }>
                                <div className={ styles.orderContainer }>
                                    <div className={ styles.statusText }>Order status: { history.order_status } </div>
                                    <div className={ styles.productText }>Ordered product(s): { history.product_name } </div>
                                    <button onClick={ handleButtonPreparing } className={ styles.buttonStylePreparing }>Preparing</button>
                                    <button onClick={ handleButtonRFD } className={ styles.buttonStyleRFD}>Ready for delivery</button>
                                    <button onClick={ handleButtonDelivering } className={ styles.buttonStyleDelivering }>Delivering</button>
                                    <button onClick={ handleButtonDelivered } className={ styles.buttonStyleDelivered }>Delivered</button>
                                </div>
                            </div>
                        })
                    }

                </div>
            
        </div>
    )
}