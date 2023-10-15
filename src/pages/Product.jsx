import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { teslaapiFetching } from '../Redux/Product/Action'

const Product = () => {
    const { data } = useSelector((store) => store.ProductReducer) || [];
    console.log(data.Productpage-1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(teslaapiFetching())
    }, []);
    return (
        <div>
            {
                data.map((ele) => (  // Added parentheses to return JSX
                    <div className="main-div" key={ele.id}>
                        <h1>{ele.title}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Product
