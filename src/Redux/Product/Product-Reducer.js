import { ERROR, LOADING, SUCCESS } from "./ActionType";

let initial={
    isLoading:false,
    isError:false,
    data:[]
}

export const ProductReducer =(state=initial,{type,payload})=>{
    switch (type) {
        case LOADING:
            return{
                ...state,
                isLoading:true
            }
        case SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:payload
            }
        case ERROR:
            return{
                ...state,
                isError:true
            }
    
        default:
            return state;
            break;
    }
}