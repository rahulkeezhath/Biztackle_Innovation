import React from 'react'
import { useLocation } from 'react-router-dom'

const CartPage = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const productId = searchParams.get('productId')
    const quantity = parseInt(searchParams.get('quantity'), 10);

  return (
    <div>
        <h2>Cart</h2>
        <p>Product ID: {productId}</p>
        <p>Quantity: {quantity}</p>
    </div>
  )
}

export default CartPage