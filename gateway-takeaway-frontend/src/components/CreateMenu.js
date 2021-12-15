import React, { useState, useEffect, useContext } from "react";
import styles from './CreateMenu.module.css';
import axios, { post } from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext } from './Contexts';

export default function CreateMenu() {

  let navigate = useNavigate();

  const UserAuthContextValue = useContext(UserAuthContext);

  const [ info, setInfo ] = useState([]);

  const [ category, setCategory ] = useState("");
  const [ restaurant, setRestaurant ] = useState("");
  const [ product, setProduct ] = useState("");
  const [ Price, setPrice ] = useState("");
  const [ Description, setDescription ] = useState("");
  const [ image, setImage ] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const results = await axios.get('https://back-end-22-group.herokuapp.com/restaurantmenu', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
          }
      });

      setInfo(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'https://back-end-22-group.herokuapp.com/restaurantmenu';
    const formData = new FormData();
    formData.append('category_name', category);
    formData.append('restaurant_name', restaurant);
    formData.append('product_name', product);
    formData.append('price', Price);
    formData.append('description', Description);
    formData.append('image', image);
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + UserAuthContextValue.jwt
    }
    }
    post(url, formData, config).then((response) => {
      console.log(response.data);
      navigate("/createmenu", { replace: true });
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
            <div className={styles.titleText}>Manager menu page</div>
            <div className={styles.subtitleText}>Create a new menu by filling in the details (Category : green | Restaurant : red)</div>
            {
              info.map((i, index) => {
                return <div key={index}>
                  <div className={ styles.infoContainer }>
                  <div className={ styles.restRight }> { i.restaurant_name } </div>
                  <div className={ styles.cateLeft }>{ i.category_name } </div>
                  </div>
                </div>
              })
            }
            <div>
              <form onSubmit={handleSubmit}>
                <input className={styles.textField1} placeholder="Your restaurant's name* (case sensitive)" type="text" required value={restaurant} onChange={e => setRestaurant(e.target.value)} />
                <input className={styles.textField2} placeholder="Category name*" type="text" required value={category} onChange={e => setCategory(e.target.value)} />
                <input className={styles.textField3} placeholder="Product name*" type="text" required value={product} onChange={e => setProduct(e.target.value)} />
                <input className={styles.textField4} placeholder="Product price*" type="text" required value={Price} onChange={e => setPrice(e.target.value)} />
                <input className={styles.textField5} placeholder="Product description*" type="text" required value={Description} onChange={e => setDescription(e.target.value)} />
                <input className={styles.textField6} type="file" onChange={e => setImage(e.target.files[0])} />
                  <button type="submit" className={ styles.createButton }>Create menu</button>
              </form>
            </div>
        </div>
    </div>
  )
}
