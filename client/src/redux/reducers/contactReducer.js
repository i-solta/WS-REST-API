import { GET_CONTACT } from "../actions/actionTypes"
const initState={
    contacts:[]
}
export const contactReducer=(state=initState,action)=>{
 switch(action.type){
     case GET_CONTACT:
         return{...state,contacts:action.payload}
         default:return state
 }
}