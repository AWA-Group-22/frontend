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

  // const handleSubmit = () => {
  //   axios({
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + UserAuthContextValue.jwt
  //       },
  //       method: "post",
  //       data: {
  //         restaurant_name: name,
  //         address_restaurant: address,
  //         operating_hours: hours,
  //         image: image,
  //         restaurant_type: type,
  //         price_level: price
  //       },
  //       url: "https://back-end-22-group.herokuapp.com/register_restaurant",
  //   })
  //   .then((res) => res.json())
  //   .then((result) => {
  //     console.log("Successfully created a menu:", result);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // };

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

//   return (

//   <div className= {styles.ManageRestaurants}>
//     <h2>Create a new restaurant</h2>
//     <div><Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><button>Back</button></Link></div>
//     <form onSubmit={handleSubmit}>
//       <label>Restaurant Name:</label>
//       <input 
//         type="text"
//         required
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         />
        
//       <label>Address:</label>
//       <input 
//         type="text"
//         required
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         />

//         <label>Operating hours</label>
//       <input 
//         type="text"
//         required
//         value={hours}
//         onChange={(e) => setHours(e.target.value)}
//         />

//         <label>Restaurant type:</label>
//       <select
//       value={type}
//       onChange={(e) =>setType(e.target.value)}
//       >
//           <option value="Buffet">Buffet</option>
//           <option value="Fast food">Fast food</option>
//           <option value="Fast casual">Fast casual</option>
//           <option value="Casual dining">Casual dining</option>
//           <option value="Fine dining">Fine dining</option>
//       </select>

//         <label>Price level:</label>
//       <select
//       value={price}
//       onChange={(e) => setPrice(e.target.value)}
//       >
//       <option value='€'>€</option>
//       <option value='€€'>€€</option>
//       <option value='€€€'>€€€</option>
//       <option value='€€€€'>€€€€</option>
//       </select>

//       <label>Image</label>
//       <input 
//         type="text"
//         required
//         value={image}
//         onChange={(e) =>setImage(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Add restaurant</button>
//       </form>
//    </div>    
//   );
// }
