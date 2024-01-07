import { LOGIN, SIGNUP } from "./ActionType"

const initial={
    user:null,
    isSignup:false
}
const reducer=(state=initial,action)=>{
    switch(action.type){
        case LOGIN :
            return{
                ...state,
                user:action.payload
            }
            case SIGNUP :
                return{
                    ...state,
                    isSignup :true
                }
                default : return state
    }
}

export default reducer