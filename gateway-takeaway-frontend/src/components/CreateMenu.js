import React, { useState } from "react";
import styles from './CreateMenu.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

    const  CreateMenu = () =>{       
        const [restaurant,setRestaurant] = useState('');
        const [category,setCategory] = useState('');
        const [name,setName] = useState('');
        const [description,setDescription] = useState('');
        const [price,setPrice] = useState('');
        const [image,setImage] = useState('');

        
          const handleSubmit = () => {
            axios({
              method: "post",
              data: {category_name: category,
                     restaurant_name: restaurant,
                     product_name:name,
                     description: description,
                     price:price,
                     product_image:image
  
              
              }, 
              url:"  https://back-end-22-group.herokuapp.com/restaurant/menu"
            })
            .then((res)=>console.log(res));
         
          };
        

        
    
     
    
        
        return (
            
            <div className= {styles.CreateMenu}>
         <h2>Create a new menu for a restaurant</h2>
         <div><Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><button>Back</button></Link></div>
          <form onSubmit={handleSubmit}>
           <label>Select restaurant:</label>
           <select
           value={restaurant}
           onChange={(e) =>setRestaurant(e.target.value)}
           >
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

             <label>Name:</label>
           <input 
             type="text"
             required
             value={name}
             onChange={(e) => setName(e.target.value)}
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
             onChange={(e) =>setImage(e.target.value)}
             />
             <button >Add restaurant</button>
                 
             
       </form>
   </div>

            
        );
    


}


export default CreateMenu;
