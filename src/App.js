import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CartPage from './components/CartPage';
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product])
  }

  return (
    <div className="App">
     <h1>E-commerce Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<ProductList addToCart={addToCart}/> }/>
        <Route path="/cart" element={<CartPage cartItems={cartItems} /> }/>
      </Routes>
    </div>
  )
}

export default App;
