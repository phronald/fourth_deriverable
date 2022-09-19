import React from 'react';

const UserList = ({users,deleteUsers,selectUser}) => {
    return (
        <div className='container_users'>
           {
             users.map((user)=> (
                <li key={user.id} className="user_item">
                    <div className='name'>
                      <p className='name_user'>  {user.first_name} {user.last_name}</p> 
                      <hr  className='text_gray_item'/> 
                    </div>
                    <div>
                    <p className='text_gray_item'>email</p>{user.email}
                    </div>
                    <div>
                    <p  className='text_gray_item'>password</p>{user.password}
                    </div>
                    <div>
                    <p  className='text_gray_item'>birthday</p>{user.birthday}
                    </div>
                    <div className='buttons_list'>
                        <button type='button' className='first_button_list' onClick={()=>selectUser(user)}><i className="fa-solid fa-file-pen  "></i></button>
                        <button type='button' onClick={()=>deleteUsers(user)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </li>
             ))
           }

    
            
        </div>
    );
};

export default UserList;