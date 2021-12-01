import React, { useState, Component } from 'react';
import styles from './ManagerOrderPage.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ManagerOrderPage extends Component {

    constructor(props) {
        super(props);
        this.state ={ orderCollection: [] };
    }

    // componentDidMount() {
    //     axios.get
    // }

    render() {
        return (
            <div>
                WIP
            </div>
        )
    }
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