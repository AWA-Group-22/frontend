import React, { useState, useEffect } from 'react';
import styles from './ManagerOrderPage.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function ManagerOrderPage() {

    let navigate = useNavigate();

    const [ManagerOrderPageData, setManagerOrderPageData] = useState([]);
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

    const handleButtonReceived = (e) => {
      e.preventDefault()
      const userObject = {
          order_status: orders.order_status
      };
      axios({
        method: "post",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        url: "https://back-end-22-group.herokuapp.com/customer/order/confirm" + userObject,
      }).then((res) => {
        console.log(res.data)
        console.log("Order confirmed successfully");
        navigate('/managerpage');
      });
    };

    const handleButtonPreparing = (e) => {
        e.preventDefault()
        const userObject = {
            order_status: orders.order_status
        };
        axios({
          method: "post",
          credentials: "true",
          headers: { "Content-Type": "application/json" },
          url: "https://back-end-22-group.herokuapp.com/customer/order/confirm" + userObject,
        }).then((res) => {
          console.log(res.data)
          console.log("Order confirmed successfully");
          navigate('/managerpage');
        });
      };

      const handleButtonRFD = (e) => {
        e.preventDefault()
        const userObject = {
            order_status: orders.order_status
        };
        axios({
          method: "post",
          credentials: "true",
          headers: { "Content-Type": "application/json" },
          url: "https://back-end-22-group.herokuapp.com/customer/order/confirm" + userObject,
        }).then((res) => {
          console.log(res.data)
          console.log("Order confirmed successfully");
          navigate('/managerpage');
        });
      };

      const handleButtonDelivering = (e) => {
        e.preventDefault()
        const userObject = {
            order_status: orders.order_status
        };
        axios({
          method: "post",
          credentials: "true",
          headers: { "Content-Type": "application/json" },
          url: "https://back-end-22-group.herokuapp.com/customer/order/confirm" + userObject,
        }).then((res) => {
          console.log(res.data)
          console.log("Order confirmed successfully");
          navigate('/managerpage');
        });
      };

      const handleButtonDelivered = (e) => {
        e.preventDefault()
        const userObject = {
            order_status: orders.order_status
        };
        axios({
          method: "post",
          credentials: "true",
          headers: { "Content-Type": "application/json" },
          url: "https://back-end-22-group.herokuapp.com/customer/order/confirm" + userObject,
        }).then((res) => {
          console.log(res.data)
          console.log("Order confirmed successfully");
          navigate('/managerpage');
        });
      };

    return (
        <div>
            <div className={styles.headerContainer}>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
                <button onClick={ getOrders }>Get orders</button>
                <button onClick={ getOrderHistory }>Get order history</button>
                <div className={ styles.backButton }>
                    <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
            </div>
                <div>
                    <div className={ styles.titleText }>Orders</div>
                    <div className={ styles.orderStatusText }>Current order status: { orders.order_status } </div>
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
                        <div className={ styles.restaurantName }>Subway: Chicken chorizo sub: 6.90€</div>
                            <button className={ styles.buttonStyle }>Confirm received order</button>
                        <div className={ styles.statusText }>Order status: Received</div>
                    </div>
                    <div className={ styles.orderHistoryContainer1 }>
                        <div className={ styles.restaurantName }>FaFa's: tofu: 9.90€</div>
                    </div>
                    <div className={ styles.orderHistoryContainer2 }>
                        <div className={ styles.restaurantName }>MCDonalds: whopper: 1€</div>
                    </div>
                </div>
            
        </div>
    )
}

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