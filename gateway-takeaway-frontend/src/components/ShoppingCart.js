import React, { useState, useEffect, useContext } from 'react'
import kartta from './kartta.png';
import styles from './ShoppingCart.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthContext } from './Contexts';
import axios from 'axios';

export default function ShoppingCart(props) {

  let navigate = useNavigate();

  const UserAuthContextValue = useContext(UserAuthContext);

  const [restaurants, setRestaurants] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [order, setOrder] = useState("Received");
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios.get('https://back-end-22-group.herokuapp.com/restaurants')
      .then(res => {
        setRestaurants(res.data);
        console.log(res.data);
      })
  }, []);

  useEffect(() => {
    getCustomer();
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

  const makeOrder = () => {
    axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
        },
        method: "post",
        data: {
            product_id: product,
            order_status: "Received"
        },
        url: "https://back-end-22-group.herokuapp.com/customer/order",
    })
    .then((res) => console.log(res));
    navigate('/orderdonepage')
};

  return (
    <div>
      <img src={kartta} width="1920" height="761"/>
         {
          customers.map((customer) => {
            return <div>
              <div className={ styles.title }>Delivery for { customer.first_name } { customer.last_name } </div>
              <div className={ styles.backButton }>
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
              <div className={ styles.container1 }>🚲 Delivery in 15-25 min to { customer.address } </div>
          </div>
          })
        }
      <div className={ styles.CartContainer }>
        <div>
          Type product id from the restaurant menu to order
        </div>
        <input placeholder="type product id*" onChange={e => setproduct(e.target.value)} />
        <div className={ styles.orderButton }><button onClick={makeOrder}>Order now</button></div>
      </div>
      <div className={ styles.CommentContainer }>
        <input placeholder="🗨️  Comment for the restaurant " />
      </div>
      <div className={ styles.PaymentText }>Payment via:</div>
      <div className={ styles.ChoosePayment }>
        <option value="Bisa electrum">💳 Bisa Electrum</option>
        </div>
      </div>

  )
}
