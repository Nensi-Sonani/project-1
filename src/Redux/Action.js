import { LOGIN, SIGNUP } from "./ActionType"

export const UserLogin=(data)=>{
    return{
        type:LOGIN,
        payload:data
    }
}

export const UserSignup=()=>{
    type:SIGNUP
}