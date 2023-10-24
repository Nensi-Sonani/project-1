import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {
    let [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(" http://localhost:9999/cart")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='cart-map container'>
        {
            data.map((e)=>{
                return(
                    <div className='main-cart'>
                     <img src={e.image} alt="" />
                     <h2>{e.title}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cart