import {combineReducers, compose, createStore} from 'redux'
import orderReducer from './orderReducer'


let reducers = combineReducers({
  order: orderReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers()
);
window.store = store

export default store
