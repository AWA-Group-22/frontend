import React, { useState, useContext } from "react";
import styles from './ManageRestaurants.module.css';
import axios, { post } from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext } from './Contexts';

export default function ManageRestaurants() {

  let navigate = useNavigate();

  const UserAuthContextValue = useContext(UserAuthContext);

  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [hours,setHours] = useState("");
  const [type,setType] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'https://back-end-22-group.herokuapp.com/register_restaurant';
    const formData = new FormData();
    formData.append('restaurant_name', name);
    formData.append('address_restaurant', address);
    formData.append('image', image);
    formData.append('operating_hours', hours);
    formData.append('restaurant_type', type);
    formData.append('price_level', price);
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + UserAuthContextValue.jwt
    }
    }
    post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <div className={styles.headerContainer}>
            <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
              <div className={ styles.backButton }>
                <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
            </div>
        <div className={styles.container}>
            <div className={styles.titleText}>Manage restaurants</div>
            <div className={styles.subtitleText}>Create a new restaurant by filling in the details (max 1 per manager)</div>
            <div>
              <form onSubmit={handleSubmit}>
                <input className={styles.textField1} placeholder="name*" onChange={e => setName(e.target.value)} />
                <input className={styles.textField2} placeholder="address*" onChange={e => setAddress(e.target.value)} />
                <input className={styles.textField3} placeholder="operating hours*" onChange={e => setHours(e.target.value)} />
                <input className={styles.textField4} placeholder="type*" onChange={e => setType(e.target.value)} />
                <input className={styles.textField5} placeholder="price level*" onChange={e => setPrice(e.target.value)} />
                <input className={styles.textField6} type="file" onChange={e => setImage(e.target.files[0])} />
                  <button type="submit" className={styles.signUpButton}>Create a restaurant</button>
              </form>
            </div>
        </div>
    </div>
  )
}