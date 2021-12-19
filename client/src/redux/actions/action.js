import { GET_CONTACT } from "./actionTypes"
import axios from "axios"

export const getContacts=()=>dispatch=>{
    axios.get('/api/contact/all')
    .then(res=>dispatch({type:GET_CONTACT,payload:res.data}))
    .catch(err=>console.log(err))
}

export const addContact=(newContact)=>dispatch=>{
    axios.post('/api/contact/add',newContact)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}
export const deleteContact=(idContact)=>dispatch=>{
    axios.delete(`/api/contact/delete/${idContact}`)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}


export const editContact=(idContact,updatedContact)=>dispatch=>{
    axios.put(`/api/contact/editContact/${idContact}`,updatedContact)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}
