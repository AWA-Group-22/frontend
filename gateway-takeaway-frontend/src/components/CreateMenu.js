import React, { useState } from "react";
import styles from './CreateMenu.module.css';
import axios from 'axios';




    const  CreateMenu = () =>{       
        const [restaurant,setRestaurant] = useState('');
        const [gategory,setGategory] = useState('');
        const [name,setName] = useState('');
        const [description,setDescription] = useState('');
        const [price,setPrice] = useState('');
        const [image,setImage] = useState('');

        
          const handleSubmit = () => {
            axios({
              method: "post",
              data: {gategory_name: gategory,
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
          <form onSubmit={handleSubmit}>
           <label>Select restaurant:</label>
           <select
           value={restaurant}
           onChange={(e) =>setRestaurant(e.target.value)}
           >
               <option value="Restaurant 1">Restaurant 1</option>
               <option value="Restaurant 2">Restaurant 2</option>
               <option value="Restaurant 3">Restaurant 3</option>
               <option value="Restaurant 4">Restaurant 4</option>
               <option value="Restaurant 5">Restaurant 5</option>
            </select>
              
            <label>Food category:</label>
           <input 
             type="text"
             required
             value={gategory}
             onChange={(e) => setGategory(e.target.value)}
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
             <p>{restaurant} </p>
             <p>{gategory}</p>
             <p>{name}</p>
             <p>{description}</p>
             <p>{price}</p>
             <p>{image}</p>
                 
             
       </form>
   </div>

            
        );
    


}


export default CreateMenu;
