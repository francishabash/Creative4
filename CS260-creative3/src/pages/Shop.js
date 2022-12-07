import { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from "./components/Cart.js"

function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [cart, setCart] = useState([]);
  const [update, setUpdate] = useState(true);

  const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
      console.log(response.data.products);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  }
  const createProduct = async() => {
    try {
        console.log(info)
      await axios.post("/api/products", {name: name, info: info, image: image});
    } catch(error) {
      setError("error adding a products: " + error);
    }
  }
  const deleteOneProduct = async(product) => {
    try {
      await axios.delete("/api/products/" + product.id);
    } catch(error) {
      setError("error deleting a products" + error);
    }
  }
  //cart
  const fetchCart = async() => {
    try {      
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  };
  
  const updateCart = () =>{
    setUpdate(true);
  };
  
  const addCart = async(id, name) => {
    try {
      await axios.post("/api/cart/" + id + "/" + name);
      setUpdate(true);
    } catch(error) {
      setError("error adding to cart here" + error);
    }
  };
  

  // fetch ticket data
  useEffect(() => {
    fetchProducts();
    if(update){
      fetchCart();
      setUpdate(false);
    }
  },[update]);

  const addProduct = async(e) => {
    e.preventDefault();
    await createProduct();
    fetchProducts();
    setName("");
    setInfo("");
    setImage("")
  }

  const deleteProduct = async(product) => {
    await deleteOneProduct(product);
    fetchProducts();
  }
  
  const addToCart = async(id, name) => {
    await addCart(id, name);
    fetchCart();
  };

  // render results
  return (
    <div className="App">
      {error}
      <h1>Palestinian goods handmade by locals in bethlehem</h1>
      <h3>All profits will be donated to Palestinian refugee camps</h3>
      <div class="body_div">
      <div class="pageContainer">
      
      <div class="productscont">
      <h1>Products</h1>
      {products.map( product => (
        <div key={product.id} className="product">
          <div className="item" class="item">
          <div class="productImage">
            <img src={product.image} width="250" height="150"/>
            </div>
            <div class="productText">
            <p class="productName">{product.name}</p>
            <p class="productDesc">{product.info}</p>
          <button onClick={e => addToCart(product.id, product.name)}>Add to cart</button>
            </div>

          </div>
          
        </div>
        
      ))}
      </div>
      
      <div class="cart">
      <h1>Cart</h1>
      <Cart items={cart} errors={setError} updatecart={updateCart}/>
      </div>
      </div>
      </div>
      <footer class="footer">
      <p class='data'>Francis Habash</p>
      <p class='data'><a href="https://github.com/francishabash/CS260-creative3">Github</a></p>
    </footer>
    </div>
  );
}

export default Shop;