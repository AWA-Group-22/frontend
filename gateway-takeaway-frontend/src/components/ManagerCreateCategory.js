import React, { useState, useContext } from "react";
import styles from './ManagerCreateCategory.module.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext } from './Contexts';

export default function ManagerCreateCategory() {

  let navigate = useNavigate();

  const UserAuthContextValue = useContext(UserAuthContext);

  const [category,setCategory] = useState("");

  
  const createCategory = () => {
    axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
        },
        method: "post",
        data: {
            category_name: category,
        },
        url: "https://back-end-22-group.herokuapp.com/category",
    })
    .then((res) => console.log(res));
    navigate("/managerpage", { replace: true });
};

  return (
    <div>
      <div className={styles.headerContainer}>
            <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link>
              <div className={ styles.backButton }>
                <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link></div>
            </div>
        <div className={styles.container}>
            <div className={styles.titleText}>Manager category page</div>
            <div className={styles.subtitleText}>Create a new product category</div>
            <div>
                <input className={styles.textField1} placeholder="category*" onChange={e => setCategory(e.target.value)} />
                  <button onClick={createCategory} className={styles.signUpButton}>Create a category</button>
            </div>
        </div>
    </div>
  )
}