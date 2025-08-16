import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link,  useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
    const {register,reset,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const RegisterHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = []
        dispatch(asyncregisteruser(user))
        navigate("/login")
    }
return (
    <div className='flex justify-center items-center pb-60 pl-30 h-screen '>
    <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2 justify-start items-start'>
        <input 
            {...register("username")}
            className='mb-3 outline-0 border-b p-2 text-4xl' 
            type='text' 
            placeholder='enter username'
        />
        <input 
            {...register("email")}
            className='mb-3 outline-0 border-b p-2 text-4xl' 
            type='email' 
            placeholder='enter email'
        />
        <input 
            {...register("password")}
            className='mb-3 outline-0 border-b p-2 text-4xl' 
            type='password' 
            placeholder='enter password'
        />
        <button className="mt-6 mb-4 p-4 bg-blue-400 rounded-xl font-medium cursor-pointer text-2xl">Register User</button>
        <Link to="/register" ></Link>
        <p className="mt-5 text-2xl">
            Already have a account?
            <Link className="text-blue-500 text-2xl ml-4" to="/login">Login </Link>
        </p>
    </form>
    </div>
)
}

export default Register