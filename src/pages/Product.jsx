import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { teslaapiFetching } from '../Redux/Product/Action'
import { Link } from 'react-router-dom'

const Product = () => {
    const { data } = useSelector((store) => store.ProductReducer) || [];
    console.log(data.Productpage-1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(teslaapiFetching)
    }, []);
    return (
        <div className='product-map container'>
            {
               data.map((e)=>{
                  return(
                     <div key={e.id} className='product-main'>
                        <Link className='product-link' to={`./${e.id}`}>
                        <img src={e.image} alt="" />
                        <h3 className='mt-3'>{e.title}</h3>
                        <p className='fw-bold'>${e.price}</p>
                        </Link>
                     </div>
                  )
               })
            }
        </div>
    )
}

export default Product
