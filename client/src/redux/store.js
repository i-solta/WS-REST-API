import { createStore, applyMiddleware, compose } from 'redux';
import thunk  from "redux-thunk"
import{contactReducer} from './reducers/contactReducer'

const middleware=[thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(
    contactReducer,
    composeEnhancers(applyMiddleware(...middleware))
    
)