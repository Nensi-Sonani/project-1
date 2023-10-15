import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType";

export const teslaapiFetching =(dispatch)=>{
    dispatch({type:LOADING})

    axios.get(`https://tesla-api.onrender.com/productpage-1`)
    .then((res)=>{
        console.log(res.data);
        dispatch({type:SUCCESS,payload:res.data})
    })

    .catch((err)=>{

        console.log(err);
        dispatch({type:ERROR})
    })
}