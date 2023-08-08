import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = ({addToCart}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await axios.get("http://big-star.instacard.digital/api/v1/products/latest");
                setProducts(response.data.products);
                console.log(response.data.products)
            } catch (error) {
                console.log('Error Fetching Products',error)
            }
        }
        fetchProducts()
    },[])

    const navigate = useNavigate()

    const handleaAddToCart = (product) => {
      addToCart(product)
      navigate(`/cart?productId=${product.id}&quantity=1`)
    }
 
  return (
    <div>
      <h2>ProductList</h2>
      {products.map((product) =>{
        return(
        <div key={product.id}>
          <h3>{product.name}</h3> 
          <button onClick={() => handleaAddToCart(product)}>Add to Cart</button>
        </div>
        )
      })}
    </div>
  );
}

export default ProductList