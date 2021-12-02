import React, { useState, Component } from 'react';
import styles from './UserOrderPage.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default class UserOrderPage extends Component {

    componentDidMount() {
        axios.get('http://localhost:4000/orders')
            .then(res => {
              this.setState({ restaurants: res.data });
            })
            .catch(function(error) {
              console.log(error);
            })
      }
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}



// export default function UserOrderPage(props) {

//     return (
//         <div>
//             <div className={styles.headerContainer}>
//             <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
//             </div>
//                 <div>
//                     <div className={ styles.styles.titleText }>Orders</div>
//                     <div className={ styles.orderStatusText }>Current order status: </div>
//                     <div className={ styles.orderHistoryText }>Order history:</div>
//                     <div className={ styles.orderContainer }>
//                         <div className={ styles.restaurantName }></div>
//                             <button className={ styles.buttonStyle }>Confirm received order</button>
//                         <div className={ styles.statusText }>
//                             Example status text lorem ipsum datum el macaron
//                         </div>
//                     </div>
//                     <div className={ styles.orderHistoryContainer1 }>
//                         <div className={ styles.restaurantName }>
//                             Example restaurant
//                         </div>
//                     </div>
//                     <div className={ styles.orderHistoryContainer2 }>
//                         <div className={ styles.restaurantName }>
//                             Example restaurant
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     )
// }
