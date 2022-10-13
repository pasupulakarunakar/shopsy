import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Home, Navigation } from "./components";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

function App() {
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);

  const handleAddToCart = (id, quantity) => {
    let temp = cartItems;
    temp[id] = quantity;
    setCartItems({ ...temp });
  };

  const addOrder = () => {
    let temp = orders || [];
    Object.keys(cartItems).forEach((key) => {
      temp.push({
        order_id: temp.length * 19027 + 12612,
        product_id: key,
        quantity: cartItems[key],
        delivery_date: "22 October 2022",
      });
    });

    setOrders([...temp]);
    setCartItems({});
  };

  return (
    <>
      {console.log(orders)}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home
                cartItems={cartItems}
                addToCart={(id, quantity) => handleAddToCart(id, quantity)}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                cartItems={cartItems}
                addToCart={(id, quantity) => handleAddToCart(id, quantity)}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route
            path="/checkout/:total"
            element={<Checkout addOrder={addOrder} />}
          />
          <Route path="/orders" element={<Orders orders={orders} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
