import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateruser } from '../../store/actions/userActions';

const UserProfile = () => {

      const  {users} = useSelector((state) => state.userReducer)
    
      const {register,reset,handleSubmit} = useForm({
        defaultValues :{
          username : users?.username,
          email: users?.email,
          password : users?.password,
        }
      })
        const dispatch = useDispatch()
        const navigate = useNavigate()
    
        const UpdateUserHandler = (user) => {
            dispatch(asyncupdateruser(users.id,user))
        }

        const LogoutUserHandler = () => {
          dispatch(asynclogoutuser())
          navigate("/login")
        }
    
        const DeleteHandler = () => {
          dispatch(asyncdeleteuser(users.id))
          navigate("/login")
        }


  return users ? (
    <div>

    <h1 className='text-7xl  font-medium mb-7 mt-10'>My Profile</h1>

        <h1 className='text-6xl mt-20 '><span className='text-6xl'>Name:- </span>{users.username}</h1>
        <h1 className=' text-3xl mt-10   '>Email:- {users.email}</h1>

        <br/>
        <br/>
        <br/>

        <form onSubmit={handleSubmit(UpdateUserHandler)} className='flex w-full flex-col justify-start items-start'>
        <input 
            {...register("username")}
            className='mb-3 outline-0 border-b p-2 text-4xl' 
            type='text' 
            placeholder='John-Doe'
        />
        <input 
            {...register("email")}
            className='mb-3 outline-0 border-b p-2 text-4xl' 
            type='email' 
            placeholder='john@doe.com'
        />
        <input 
            {...register("password")}
            className='mb-3 outline-0 border-b p-2 text-4xl' 
            type='password' 
            placeholder='****'
        />
        <button className="mt-5 px-4 py-2 bg-blue-400 rounded-xl font-medium cursor-pointer text-2xl hover:bg-blue-600">Update User </button>


        <button type="button" onClick={LogoutUserHandler} className="mt-5 px-4 py-2 bg-red-400 rounded-xl font-medium cursor-pointer text-2xl hover:bg-red-600"> Log Out 
    </button>

        <button type="button" onClick={DeleteHandler} className="mt-5 px-4 py-2 bg-red-600 rounded-xl font-medium cursor-pointer text-2xl hover:bg-red-900"> Delete User 
    </button>

    </form>
    </div>
  ) : "Loading.."
}

export default UserProfile