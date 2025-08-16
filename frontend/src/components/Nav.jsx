import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector} from "react-redux"

const Nav = () => {
    const user = useSelector((state) => state.userReducer.users)
    

    return (
        <nav className='text-3xl mb-15 flex justify-around items-center gap-x-3 p-5'>
            <NavLink to="/">Home</NavLink>


        {user ? (
        <>
        {user && user?.isAdmin &&(
            <NavLink to="/admin/create-product">Create Product</NavLink>
        )}
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/admin/user-profile">My Account</NavLink>

        </>)
        :( <>
            <NavLink to="/login">Login</NavLink>
        </>
        )}


        </nav>
)
}

export default Nav