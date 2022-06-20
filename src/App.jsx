import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import CardForm from './components/CardForm'
import UseCard from './components/UseCard'
import {useForm} from 'react-hook-form'

function App() {
  const {handleSubmit, register, reset} = useForm()
  const [user, setUser] = useState()
  const [updateU, setUpdateU] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const URL = 'https://users-crud1.herokuapp.com/users/'   

  const getUser = () => {
    axios.get(URL)
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
  }
  

  useEffect (() =>{
    getUser()
  } ,[])
  

  const createUser = UserNew => {
    axios.post(URL, UserNew)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(getUser())
  }

  
  const updateUserId = (id, UserUp) => {

    axios.patch(`${URL}${id}/`, UserUp)
      .then(res => {
        console.log(res.data)
        getUser()
        setUpdateU()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }


  const showForm = () => {
    const obj = {
      duration: "",
      genre: "",
      name: "",
      release_date: ""
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  console.log(user)
  return (
    
    <div className="App">
      <div className='center'>
        <button className='btn-74 separation' onClick={showForm}>{isShowForm ? 'Hide Form' :'Create User'}</button>
      </div>

      <div >

        <span className='center'> 

                             { isShowForm &&
                     <CardForm 
               handleSubmit={handleSubmit}   
              createUser={createUser}
              updateUserId={updateUserId}
               updateU={updateU}
            reset={reset}
             register={register}
           />
  

            }
        </span>

      </div>

     
  
    <span className='cards-style'>
      <div>
        
      </div>
    { 
      user?.map(users =>(
        <UseCard 
        key ={users.id}
        users={users}
        URL={URL}
        getUser={getUser}
        setUpdateU={setUpdateU}
        setIsShowForm={setIsShowForm}
        reset={reset}
      />
        
      
      ))
    }


    </span>

    
  
    </div>
  )
}

export default App
