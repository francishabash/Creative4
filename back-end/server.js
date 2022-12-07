const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  info: String,
  image: String,
});
let cart = [];

productSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
  productSchema.set('toJSON', {
  virtuals: true
});

const Product = mongoose.model('Products', productSchema);


app.get('/api/products', async (req, res) => {
  try {
    let products = await Product.find();
    res.send({products: products});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/products', async (req, res) => {
    const product = new Product({
    name: req.body.name,
    info: req.body.info,
    image: req.body.image
  });
  try {
    await product.save();
    res.send({product:product});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// cart

app.get('/api/cart', (req, res) => {
    console.log("In get cart");
    res.send(cart);
});

// create a cart item and update quentify if already in cart
app.post('/api/cart/:id/:name', (req, res) => {
  console.log("In post cart")
  let id = req.params.id;
  let name = req.params.name;
  let myitem = cart.find(element => element.id == id);
  if(myitem === undefined) {
    let item = {
    id: id,
    name: name,
    quantity: 1,
    }
    cart.push(item)
    res.send(item);
    res.sendStatus(200);
  }
  else{
    myitem.quantity += 1;
    res.send(myitem);
  }
});

// edit cart item quentity
app.put('/api/cart/:id/:quantity', (req, res) => {
  console.log("In put cart")
  let id = req.params.id;
  let quantity = parseInt(req.params.quantity);
  
  let myitem = cart.find(element => element.id == id);
  if(myitem === undefined) {
    res.status(404)
      .send("Sorry, that item doesn't exist in the cart");
    return;
  }
  else{
    myitem.quantity = quantity;
    if(quantity === 0){
      let result = cart.filter(item => item.id != id)
      cart = result
    }
    res.send(myitem);
    res.sendStatus(200);
  }
});


// delete item from cart
app.delete('/api/cart/:id', (req, res) => {
  console.log("In delete cart")
  let id = req.params.id;
  let result = cart.filter(item => item.id != id)
  cart = result
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));