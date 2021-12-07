import React from 'react'
import kartta from './kartta.png';
import styles from './ShoppingCart.module.css';
import { Link } from 'react-router-dom';
export default function ShoppingCart() {
  
  return (
    <div>
      <img src={kartta} width="1920" height="761"/>
      <div className={ styles.title }>Delivery location</div>
      <div className={ styles.backButton }>
         <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
      <div className={ styles.container1 }>🚲 Delivery in 15-25 min to Kallenkuja 5 B</div>
      <div className={ styles.container3 }>Cart contents</div>
      <div className={ styles.container4 }>
        <div>Tofu halloumi 4.90€</div>
        <div>Chicken chorizo 6.90€</div>
      </div>
      <div className={ styles.CartContainer }>Prices include VAT
        <div>
          4.90€ + 6.90€
        </div>
        <div>
          total: 11.80€
        </div>
        <Link to="/orderdonepage" style={{ color: 'inherit', textDecoration: 'none' }}>Order now</Link>
      </div>
      <div className={ styles.CommentContainer }>🗨️  Comment for the restaurant </div>
      <div className={ styles.PaymentText }>Payment </div>
      <div className={ styles.ChoosePayment }>
        <option value="Choose Payment method">💳 Choose Payment Method</option>
        <option value="Bisa electrum">💳 Bisa Electrum</option>
        <option value="Kärkkäinen premium">💳 Kärkkäinen premium</option>
        <option value="gPass">💳 gPass</option>
        <option value="Bitcoin">₿ Bitcoin</option></div>



      </div>

  )
}
