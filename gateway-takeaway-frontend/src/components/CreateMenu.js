import React, { useState, useEffect, useContext } from "react";
import styles from './CreateMenu.module.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext } from './Contexts';

export default function CreateMenu(props) {

  let navigate = useNavigate();
  const UserAuthContextValue = useContext(UserAuthContext);

  const [ restaurantInfo, setRestaurantInfo ] = useState([]);

  const [ selectedFile, setSelectedFile ] = useState();
  const [ isFilePicked, setIsFilePicked ] = useState(false);

  const [ restaurant, setRestaurant ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ productName, setProductName ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");

  const getRestaurantInfo = async () => {
    try {
      const results = await axios.get('https://back-end-22-group.herokuapp.com/restaurants', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
          }
      });
      setRestaurantInfo(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = () => {

    const formData = new FormData();
    formData.append('File', selectedFile);

    axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
        },
        method: "post",
        data: {
          product_name: productName,
          price: price,
          description: description,
          product_image: imageData
        },
        url: "https://back-end-22-group.herokuapp.com/restaurant/menu",
    })
    .then((res) => console.log(res));
  };

  return (
    <div>
      <div className={styles.headerContainer}>
            <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><div className={ styles.brandText }>Gateway Takeaway</div></Link></div>
        <div className={styles.container}>
            <div className={styles.titleText}>Manage restaurants</div>
            <div className={styles.subtitleText}>Create a new restaurant by filling in the details</div>
            <div>
              <form onSubmit={handleSubmit}>
                <label>Select restaurant:</label>
                <select value={restaurant} onChange={(e) =>setRestaurant(e.target.value)}>
                    <option value="Restaurant 1">FaFa's</option>
                    <option value="Restaurant 2">MCDonalds</option>
                    <option value="Restaurant 3">Subway</option>
                    <option value="Restaurant 4">Taco bell</option>
                    <option value="Restaurant 5">Burger king</option>
                  </select>       
                  <label>Food category:</label>
                <input 
                  type="text"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  />
                  <label>Product name:</label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setProductName(e.target.value)}
                  />
                  <label>Description:</label>
                  <input 
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                  <label>Price:</label>
                  <input 
                  type="text"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  />
                  <label>Image</label>
                <input 
                  type="text"
                  required
                  value={image}
                  onChange={(e) =>imageUpload(e.target.value)}
                  />
                  <button >Add restaurant</button>       
              </form>
            </div>
        </div>
    </div>
  )
}


//     const  CreateMenu = () =>{       
        // const [restaurant,setRestaurant] = useState('');
        // const [category,setCategory] = useState('');
        // const [name,setName] = useState('');
        // const [description,setDescription] = useState('');
        // const [price,setPrice] = useState('');
        // const [image,setImage] = useState('');      
//           const handleSubmit = () => {
//             axios({
//               method: "post",
//               data: {category_name: category,
//                      restaurant_name: restaurant,
//                      product_name:name,
//                      description: description,
//                      price:price,
//                      product_image:imag
//               }, 
//               url:"  https://back-end-22-group.herokuapp.com/restaurant/menu"
//             })
//             .then((res)=>console.log(res));        
//           };       
//         return (        
  //           <div className= {styles.CreateMenu}>
  //        <h2>Create a new menu for a restaurant</h2>
  //        <div><Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><button>Back</button></Link></div>
      //     <form onSubmit={handleSubmit}>
      //      <label>Select restaurant:</label>
      //      <select
      //      value={restaurant}
      //      onChange={(e) =>setRestaurant(e.target.value)}
      //      >
      //          <option value="Restaurant 1">FaFa's</option>
      //          <option value="Restaurant 2">MCDonalds</option>
      //          <option value="Restaurant 3">Subway</option>
      //          <option value="Restaurant 4">Taco bell</option>
      //          <option value="Restaurant 5">Burger king</option>
      //       </select>       
      //       <label>Food category:</label>
      //      <input 
      //        type="text"
      //        required
      //        value={category}
      //        onChange={(e) => setCategory(e.target.value)}
      //        />
      //        <label>Name:</label>
      //      <input 
      //        type="text"
      //        required
      //        value={name}
      //        onChange={(e) => setName(e.target.value)}
      //        />
      //        <label>Description:</label>
      //        <input 
      //        type="text"
      //        required
      //        value={description}
      //        onChange={(e) => setDescription(e.target.value)}
      //        />
      //        <label>Price:</label>
      //        <input 
      //        type="text"
      //        required
      //        value={price}
      //        onChange={(e) => setPrice(e.target.value)}
      //        />
      //       <label>Image</label>
      //      <input 
      //        type="text"
      //        required
      //        value={image}
      //        onChange={(e) =>setImage(e.target.value)}
      //        />
      //        <button >Add restaurant</button>       
      //  </form>
  //  </div>
  //       );
// }


// export default CreateMenu;
