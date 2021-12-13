import React, { useState, useEffect, useContext } from "react";
import styles from './CreateMenu.module.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext } from './Contexts';

export default function CreateMenu(props) {

  let navigate = useNavigate();
  const UserAuthContextValue = useContext(UserAuthContext);

  // const [ restaurantInfo, setRestaurantInfo ] = useState([]);

  // const [ selectedFile, setSelectedFile ] = useState();
  // const [ isFilePicked, setIsFilePicked ] = useState(false);

  const [ category, setCategory ] = useState("");
  const [ restaurant, setRestaurant ] = useState("");
  const [ product, setProduct ] = useState("");
  const [ Price, setPrice ] = useState("");
  const [ Description, setDescription ] = useState("");
  const [ image, setImage ] = useState();

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // const getRestaurantInfo = async () => {
  //   try {
  //     const results = await axios.get('https://back-end-22-group.herokuapp.com/restaurants', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + UserAuthContextValue.jwt
  //         }
  //     });
  //     setRestaurantInfo(results.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const changeHandler = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   setIsFilePicked(true);
  // };

  const handleSubmit = () => {

    // const formData = new FormData();
    // formData.append('File', selectedFile);

    axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
        },
        method: "post",
        data: {
          category_name: category,
          restaurant_name: restaurant,
          product_name: product,
          price: Price,
          description: Description,
          product_image: image
        },
        url: "https://back-end-22-group.herokuapp.com/restaurant/menu",
    })
    .then((res) => console.log(res));
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
            <div className={styles.subtitleText}>Create a new menu by filling in the details</div>
            <div>
              <input className={styles.textField1} placeholder="Your restaurant's name* (case sensitive)" type="text" required value={restaurant} onChange={e => setRestaurant(e.target.value)} />
              <input className={styles.textField2} placeholder="Category name*" type="text" required value={category} onChange={e => setCategory(e.target.value)} />
              <input className={styles.textField3} placeholder="Product name*" type="text" required value={product} onChange={e => setProduct(e.target.value)} />
              <input className={styles.textField4} placeholder="Product price*" type="text" required value={Price} onChange={e => setPrice(e.target.value)} />
              <input className={styles.textField5} placeholder="Product description*" type="text" required value={Description} onChange={e => setDescription(e.target.value)} />
              <input className={styles.textField6} type="file" onChange={e => setImage(e.target.files)} />
                <button onClick={handleSubmit} className={ styles.createButton }>Create menu</button>
            </div>
        </div>
    </div>
  )
}

                {/* <label className={ styles.text1 }>Type in your restaurant's name: (case sensitive)</label>
                <input className={ styles.textField1 }
                  type="text"
                  required
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                  />
                <label className={ styles.text2 }>Food category:</label>
                  <input className={ styles.textField2 }
                  type="text"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  />
                <label className={ styles.text3 }>Product name:</label>
                  <input className={ styles.textField3 }
                  type="text"
                  required
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  />
                <label className={ styles.text4 }>Description:</label>
                  <input className={ styles.textField4 }
                  type="text"
                  required
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                <label className={ styles.text5 }>Price:</label>
                  <input className={ styles.textField5 } 
                  type="text"
                  required
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                  />
                <label className={ styles.text6 }>Image (png)</label>
                  <input className={ styles.textField6 }
                  type="file"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.files)}
                  /> */}


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
