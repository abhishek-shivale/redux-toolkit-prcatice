import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../cartSlice';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  async function fetchData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

    const product = useSelector((state)=> state.cartBtn)
    console.log(product);

  return (
   
    <div>
    <Link to={'/cart'}>
        <button>cart</button>
    </Link>
      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={()=>{
             dispatch(addtoCart(product))
          }}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
