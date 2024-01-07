import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cart = (id) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9999/cart${id}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='cart-map container'>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className='main-cart'>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                    </div>
                ))
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
};

export default Cart;
