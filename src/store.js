import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { listReducer } from './reducers/restReducers'

//saving reducers - key values
const reducers = combineReducers({
    //reducer is the one who store the output of action into the store, represent it as a key value pair
    restaurentReducer: listReducer
});
//middleware - synchronous to asynchronous
const middleware = [thunk]

//creating store
const store = createStore(reducers, applyMiddleware(...middleware));



export default store

