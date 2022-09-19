import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const UserForm = ({getusers,updateUser,deselectuser,visible,setFormVisible}) => {
const{register,handleSubmit,reset}=useForm();
useEffect(()=>{
  if(updateUser!==null){
 reset(updateUser)
  }
},[updateUser])

const submit=(data)=>{
if(updateUser){
  visible()
  axios.put(`https://users-crud1.herokuapp.com/users/${updateUser.id}/`,data)
  .then(()=>{getusers();clear()})
}else{
  visible()
  axios
  .post("https://users-crud1.herokuapp.com/users/",data)
  .then(()=>{getusers();clear()})
  .catch((error)=>console.log(error.response))
}
}
const clear=()=>{
reset({
  first_name:"",
  last_name:"",
  email:"",
  password:"",
  birthday:""
})
deselectuser()
}
  return (
    <div className="container_UserForm">
      <div className="container_close">
      <i className="fa-regular fa-user"></i>
      <button type="button" onClick={visible} className="close"><i className="fa-solid fa-xmark"></i></button>
      </div>

      <h5 className="text_hover  int">ingresa ala plataforma</h5>
      <h2 className="h2">inicia sesion</h2>
      <div className="text_resgister">

      <h4 className="text_hover">¿no eres usuario?</h4><b className="b"> registrate</b>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <li>
            <input
             type="text" 
             id="first_name" 
             placeholder="name"
             {...register('first_name')}
            />
          </li>
        </div>
        <div>
          <li>
            <input
            type="text"
            id="last_name" 
            placeholder="lastName"
             {...register('last_name')}
             />
          </li>
        </div>
        <div>
          <li>
            <input
             type="email" 
             id="email"
             placeholder="email"
             {...register('email')}
             />
          </li>
        </div>  <div>
          <li>
            <input 
            type="password" 
            id="password"
            placeholder="password"
            {...register('password')}
            />
          </li>
        </div> 
         <div>
          <li>
            <input 
            type="date" 
            id="birthday"
            placeholder="birthday"
            {...register('birthday')}
            />
          </li>
        </div>
        <div className="text_finish">
          <h4 className="text_hover">
          ¿olvidaste tu contraseña?
          </h4>
        </div>
        <div className="buttons">
        <button className="submit" >{updateUser?"actualizar":"upload"}</button>
        <button className="clear" onClick={clear} type="button">clear</button>
        </div>

      </form>
    </div>
  );
};

export default UserForm;
