import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Item(props){
    const {item, error, updatecart} = props;
    const [product, setProduct] = useState([]);
    console.log("item: ",item);
    
    const updateItemQuantity = async(id ,quantity) => {
    try {
      await axios.put("/api/cart/" + id + "/" + quantity);
      updatecart();
    } catch(error) {
      error("error updating cart quantity" + error);
    }
    };
  
  const deleteOneItem = async(id) => {
    try {
      await axios.delete("/api/cart/" + id);
      updatecart();
    } catch(error) {
      error("error deleting a item" + error);
    }
  };
  
  //   const updateQuantity = async(id, quantity) => {
  //   await updateItemQuantity(id, quantity);
  //   updatecart();
  // };
  
  
  
  // const deleteItem = async(id) => {
  //   await deleteOneItem(id);
  //   updatecart();
  // };
  
  useEffect(() => {
    const getproductbyid = async() => {
    try {
      const response = await axios.get("/api/products/" + item.id);
      console.log("product", response.data);
      setProduct(response.data);
    } catch(error) {
      error("error getting product by ID" + error);
    }
  };
  getproductbyid();
  },[item, error]);
    // console.log
    return (
        <div>
        <div class="cartItem">
        
        <div class="textItem">
        <p>{item.name}<br/>  Quantity: {item.quantity}</p>
        </div>
        <div class="buttons">
        <button onClick={e => updateItemQuantity(item.id, item.quantity - 1)} class="subadd">-</button>
        <button onClick={e => updateItemQuantity(item.id, item.quantity + 1)} class="subadd">+</button>
        <button onClick={e => deleteOneItem(item.id)}>delete</button>
        </div>
        </div>
        </div>
    );
}