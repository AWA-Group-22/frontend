import React from 'react'
import kartta from './kartta.png';
import styles from './ShoppingCart.module.css';
import { Link } from 'react-router-dom';
export default function ShoppingCart() {
  
  return (
    <div>
      <img src={kartta}/>
      <div className={ styles.title }>Delivery location</div>
      <div className={ styles.backButton }>
         <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
      <div className={ styles.container1 }>🚲 Delivery in 15-25 min to Kallenkuja 5 B</div>
      <div className={ styles.container2 }>No-contact delivery</div>
      <div className={styles.Button1}> YES </div>
      <div className={ styles.Button2}> NO </div>
      <div className={ styles.container3 }>Cart contents</div>
      <div className={ styles.container4 }>heigwwgwg </div>
      <div className={ styles.CartContainer }>Prices include VAT </div>
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
