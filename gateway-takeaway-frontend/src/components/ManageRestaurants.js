import React, { useState } from "react";
import styles from './ManageRestaurants.module.css';
import axios from 'axios';




    const  ManageRestaurants =() =>{       
        const [name,setName] = useState('');
        const [address,setAddress] = useState('');
        const [hours,setHours] = useState('');
        const [type,setType] = useState('Buffet');
        const [price,setPrice] = useState('€');
        const [image,setImage] = useState('');

        const handleSubmit = () => {
          axios({
            method: "post",
            data: {restaurant_name: name,
                   address_restaurant: address,
                   operating_hours:hours,
                   restaurant_type:type,
                   price_level:price,
                   image:image

            
            }, 
            url:" https://back-end-22-group.herokuapp.com/register_restaurant"
          })
          .then((res)=>console.log(res));
       
        };
    
     
    
        
        return (
            
               <div className= {styles.ManageRestaurants}>
         <h2>Create a new restaurant</h2>
          <form onSubmit={handleSubmit}>
           <label>Restaurant Name:</label>
           <input 
             type="text"
             required
             value={name}
             onChange={(e) => setName(e.target.value)}
             />
              
            <label>Address:</label>
           <input 
             type="text"
             required
             value={address}
             onChange={(e) => setAddress(e.target.value)}
             />

             <label>Operating hours</label>
           <input 
             type="text"
             required
             value={hours}
             onChange={(e) => setHours(e.target.value)}
             />

             <label>Restaurant type:</label>
           <select
           value={type}
           onChange={(e) =>setType(e.target.value)}
           >
               <option value="Buffet">Buffet</option>
               <option value="Fast food">Fast food</option>
               <option value="Fast casual">Fast casual</option>
               <option value="Casual dining">Casual dining</option>
               <option value="Fine dining">Fine dining</option>
            </select>

             <label>Price level:</label>
           <select
           value={price}
           onChange={(e) => setPrice(e.target.value)}
           >
            <option value='€'>€</option>
            <option value='€€'>€€</option>
            <option value='€€€'>€€€</option>
            <option value='€€€€'>€€€€</option>
            </select>


            <label>Image</label>
           <input 
             type="text"
             required
             value={image}
             onChange={(e) =>setImage(e.target.value)}
             />
             <button >Add restaurant</button>
             <p>{name} </p>
             <p>{address}</p>
             <p>{hours}</p>
             <p>{type}</p>
             <p>{price}</p>
             <p>{image}</p>
                 
             
       </form>
   </div>

            
        );
    


}


export default ManageRestaurants;