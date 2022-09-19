import axios from 'axios'
import { useState,useEffect } from 'react'
import './App.css'
import UserForm from './componentes/UserForm'
import UserList from './componentes/UserList'
function App() {
const[users,setUsers]=useState([])
useEffect(()=>{
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then(res=>setUsers(res.data))
},[])
const getusers=()=>{
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then(res=>setUsers(res.data))
}
const deleteUsers=(user)=>{
axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
.then(()=>getusers())
}
const[updateUser,setUpdateUser]=useState(null);

const selectUser=(user)=>{
  setFormVisible(true)
  setUpdateUser(user)
}
const deselectuser=()=> 
{
  setUpdateUser(null)
}
const[formVisible,setFormVisible]=useState(false) 

const visible=()=>{
  if( formVisible===false){
    setFormVisible(true)

  }
  else{
    setFormVisible(false)
  }
}
  return (
    <div className="App">
        <header className='header'>
          <div><h1>Users</h1></div>
          <div>
            <button   onClick={visible}
          className='button_add'>
          <i className="fa-solid fa-plus">
          <span className='agregar' 
          type="button"
          >add
          </span> </i></button></div>
        </header>
        <div className="container">
{
formVisible&&(
  <div className='formulario'>
  <UserForm 
  getusers={getusers}
  updateUser={updateUser}
  deselectuser={deselectuser}
  visible={visible}
       /> 
       </div>

    )
}
     

          <UserList 
          users={users}
          deleteUsers={deleteUsers}
          selectUser={selectUser}
          />
        
       

        </div>

    </div>
  )
}

export default App
