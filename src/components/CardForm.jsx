import React from 'react'
import { useForm } from 'react-hook-form'

const CardForm = ({updateU, handleSubmit, register, reset, updateUserId, createUser}) => {
  
    const defUser = {
        first_name: "",
        last_name: "",
        birthday: "",
        email: "",
        password: ""
      }
    
      const submit = data => {
        if(updateU !== undefined){
          updateUserId(updateU.id, data)
          reset(defUser)
        } else {
          createUser(data)
        }
        reset(defUser)
      }
  
    return (

      <div>   

<form className='form-style' onSubmit={handleSubmit(submit)}>
    <div >
      <label htmlFor="first_name">First name</label> <br />
      <input className='inputs'  type="text" id='first_name' {...register('first_name')} />
    </div>
    <div>
      <label htmlFor="last_name">Last name</label> <br />
      <input className='inputs' type="text" id='last_name' {...register('last_name')} />
    </div>
    <div>
      <label htmlFor="birthday">Birthday</label> <br />
      <input className='inputs' type="date" id='birthday' {...register('birthday')} />
    </div>
    <div>
      <label htmlFor="email">Email</label> <br />
      <input className='inputs' type="text" id='email' {...register('email')} />
    </div>
    <div>
      <label htmlFor="password">Password</label> <br />
      <input className='inputs password-space' type="text" id='password' {...register('password')} />
    </div>
    <button className='btn-74' btn-74>Submit</button>
  </form>






      </div>
    
  )
}

export default CardForm