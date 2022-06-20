import axios from 'axios'
import React from 'react'


const UseCard = ({users, URL, setUpdateU, setIsShowForm, reset, getUser}) => {

    const deleteUser = id => {
        axios.delete(`${URL}${id}/`)
          .then(res => {
            console.log(res.data)
            getUser()
          })
          .catch(err => console.log(err))
      }

      const updateUsers = () => {
        setIsShowForm(true)
    
        const obj = {
          first_name: users.first_name,
          last_name: users.last_name,
          birthday: users.birthday,
          email: users.email,
          password: users.password
        }
    
        reset(obj)
        setUpdateU(users)
      }
    
  return (
    <article className='card'>
        <h2> id: #{users.id} </h2> 
        <h2> First name: {users.first_name}</h2>
        <h2> Last name: {users.last_name}</h2>
        <h2> Birthday: {users.birthday}</h2>
        <h2> Email: {users.email}</h2>
        <h2> Password: {users.password}</h2>
        <button className='fa-solid fa-trash-can' onClick={() => deleteUser(users.id)} > </button>
        <button className='fa-solid fa-pen' onClick={updateUsers} ></button>
    </article>
  )
}

export default UseCard