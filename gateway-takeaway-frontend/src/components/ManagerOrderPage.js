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
                    <div className={ styles.orderStatusText }>Current user orders: { orders.order_status } </div>
                    <div className={ styles.buttonContainer }>
                        <button onClick={ handleButtonPreparing } className={ styles.buttonStylePreparing }>Preparing</button>
                        <button onClick={ handleButtonRFD } className={ styles.buttonStyleRFD}>Ready for delivery</button>
                        <button onClick={ handleButtonDelivering } className={ styles.buttonStyleDelivering }>Delivering</button>
                        <button onClick={ handleButtonDelivered } className={ styles.buttonStyleDelivered }>Delivered</button>
                    </div>
                    <div className={ styles.orderHistoryText }>
                        Order history
                    </div>
                    {
                        ordersHistory.map((history) => {
                            return <div>
                                <div className={ styles.orderContainer }>
                                    <div className={ styles.statusText }>Order status:  </div>
                                    <div className={ styles.productText }>Ordered product(s):  </div>
                                </div>
                                <div className={ styles.orderHistoryContainer1 }>
                                    <div>Order status: { history.order_status } </div>
                                    <div className={ styles.restaurantName }>Ordered product(s): { history.product_name } </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            
        </div>
    )
}

    // const handleButtonPreparing = (e) => {
    //     e.preventDefault()
    //     const userObject = {
    //         order_status: orders.order_status
    //     };
    //     axios({
    //       method: "post",
    //       credentials: "true",
    //       headers: { "Content-Type": "application/json" },
    //       url: "https://back-end-22-group.herokuapp.com/customer/order/confirm" + userObject,
    //     }).then((res) => {
    //       console.log(res.data)
    //       console.log("Order status changed to 'Preparing' successfully");
    //       navigate('/managerpage');
    //     });
    //   };


/*
    let navigate = useNavigate();

    const [ManagerOrderPageData, setManagerOrderPageData] = useState([]);
    const [ orderStatusState, setOrderStatusState ] = useState([]);

    let decodedJwt = jwt.decode(props.userJwt);
    console.log(decodedJwt);

    const loadData = async () => {
        try {
            const results = await axios.get(Constants.API_ADDRESS + '/RestaurantJWT', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + props.userJwt
                }
            });
            setManagerOrderPageData(results.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleButtonReceived = async (event) => {
        event.preventDefault();
        setOrderStatusState("unreceived");
        try {
            const result = await axios.post(Constants.API_ADDRESS + '/orderReceivedJWT', {
                order_status: 'received'
            })
            console.log(result);
            setOrderStatusState("received");
            setTimeout(() => {
                setOrderStatusState("idle")
                navigate("/home", { replace: true });
            }, 1500);
        } catch (error) {
            console.error(error);
            setOrderStatusState("error");
            setTimeout(() => setOrderStatusState("idle"), 1500);
        }
    };

    const handleButtonPreparing = async (event) => {
        event.preventDefault();
        setOrderStatusState("unreceived");
        try {
            const result = await axios.post(Constants.API_ADDRESS + '/orderPreparingJWT', {
                order_status: 'preparing'
            })
            console.log(result);
            setOrderStatusState("received");
            setTimeout(() => {
                setOrderStatusState("idle")
                navigate("/home", { replace: true });
            }, 1500);
        } catch (error) {
            console.error(error);
            setOrderStatusState("error");
            setTimeout(() => setOrderStatusState("idle"), 1500);
        }
    };

    const handleButtonRFD = async (event) => {
        event.preventDefault();
        setOrderStatusState("unreceived");
        try {
            const result = await axios.post(Constants.API_ADDRESS + '/orderRFDJWT', {
                order_status: 'rfd'
            })
            console.log(result);
            setOrderStatusState("received");
            setTimeout(() => {
                setOrderStatusState("idle")
                navigate("/home", { replace: true });
            }, 1500);
        } catch (error) {
            console.error(error);
            setOrderStatusState("error");
            setTimeout(() => setOrderStatusState("idle"), 1500);
        }
    };

    const handleButtonDelivering = async (event) => {
        event.preventDefault();
        setOrderStatusState("unreceived");
        try {
            const result = await axios.post(Constants.API_ADDRESS + '/orderDeliveringJWT', {
                order_status: 'delivering'
            })
            console.log(result);
            setOrderStatusState("received");
            setTimeout(() => {
                setOrderStatusState("idle")
                navigate("/home", { replace: true });
            }, 1500);
        } catch (error) {
            console.error(error);
            setOrderStatusState("error");
            setTimeout(() => setOrderStatusState("idle"), 1500);
        }
    };

    const handleButtonDelivered = async (event) => {
        event.preventDefault();
        setOrderStatusState("unreceived");
        try {
            const result = await axios.post(Constants.API_ADDRESS + '/orderDeliveredJWT', {
                order_status: 'delivered'
            })
            console.log(result);
            setOrderStatusState("received");
            setTimeout(() => {
                setOrderStatusState("idle")
                navigate("/home", { replace: true });
            }, 1500);
        } catch (error) {
            console.error(error);
            setOrderStatusState("error");
            setTimeout(() => setOrderStatusState("idle"), 1500);
        }
    };

    return (
        <div>
            <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>            </div>
            <button onClick={ loadData }>Load data</button>
            { ManagerOrderPageData.map(mo => 
                <div>
                    <div className={ styles.styles.titleText }>Orders</div>
                    <div className={ styles.orderStatusText }>Current order status: { mo.order.order_status } </div>
                    <div className={ styles.titleText }>
                        Manager order page
                    </div>
                    <div className={ styles.orderStatusText }>
                        Current user orders:
                    </div>
                    <div className={ styles.buttonContainer }>
                        <button onClick={ handleButtonReceived } className={ styles.buttonStyleReceived }>Received</button>
                        <button onClick={ handleButtonPreparing } className={ styles.buttonStylePreparing }>Preparing</button>
                        <button onClick={ handleButtonRFD } className={ styles.buttonStyleRFD}>Ready for delivery</button>
                        <button onClick={ handleButtonDelivering } className={ styles.buttonStyleDelivering }>Delivering</button>
                        <button onClick={ handleButtonDelivered } className={ styles.buttonStyleDelivered }>Delivered</button>
                    </div>
                    <div className={ styles.orderHistoryText }>
                        Order history:
                    </div>
                    <div className={ styles.orderContainer }>
                        <div className={ styles.restaurantName }>Example restaurant</div>
                            <button className={ styles.buttonStyle }>Confirm received order</button>
                        <div className={ styles.statusText }>Example status text lorem ipsum datum el macaron</div>
                    </div>
                    <div className={ styles.orderHistoryContainer1 }>
                        <div className={ styles.restaurantName }>Example restaurant</div>
                    </div>
                    <div className={ styles.orderHistoryContainer2 }>
                        <div className={ styles.restaurantName }>Example restaurant</div>
                    </div>
                </div>
            )}
        </div>
    )
}

*/