import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { ProductReducer } from './Product/Product-Reducer'
import reducer from './Reducer'
import thunk from 'redux-thunk'

const mainreducer= combineReducers({
    reducer,
    ProductReducer
})

 const store = legacy_createStore(mainreducer,applyMiddleware(thunk))

 export default store