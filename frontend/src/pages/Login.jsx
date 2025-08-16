import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";

const Login = () => {
    const {register,reset,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const LoginHandler = (user) => {
        dispatch(asyncloginuser(user))
    }
return (
    <div className='flex justify-center items-center pb-60 pl-30 h-screen '>
    <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col w-1/2 justify-start items-start'>
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
        <button className="mt-6 mb-4 p-4 bg-blue-400 rounded-xl font-medium cursor-pointer text-2xl">Login User</button>
        <Link to="/register" ></Link>
        <p className="mt-5 text-2xl ">
            Don't have a account?
            <Link className="text-blue-500 ml-4 text-2xl " to="/register">Register</Link>
        </p>
    </form>
    </div>
)
}

export default Login