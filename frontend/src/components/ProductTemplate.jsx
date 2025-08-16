import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { asyncupdateruser } from '../store/actions/userActions';


const ProductTemplate = ({product}) => {

    const dispatch = useDispatch()

    const users= useSelector((state) => state.userReducer.users)
    //const products= useSelector((state) => state.productReducer.products)
    

    const AddtoCartHandler = (product) =>{
            const copyuser = {...users, cart : [...users.cart]}
            const x =copyuser.cart.findIndex((c) => c?.product?.id == product.id)
            if(x == -1){
                copyuser.cart.push({product, quantity : 1})
            }
            else{
                copyuser.cart[x] =  {
                    product ,
                    quantity: copyuser.cart[x].quantity +1
                };
            }
            dispatch(asyncupdateruser(copyuser.id,copyuser))
        }

return (
    <div className="w-[31%] mr-3 mb-3 border shadow-2xl hover:bg-gray-200" key={product.id}>
                <img className="w-full h-[50vh] object-cover" src={product.image} />
                <b><h1 className='text-2xl mt-4 p-3 text-center'>{product.title}</h1></b>
                <p className='text-xl mt-3 ml-2 text-center'>{product.description.slice(0,100)}....</p>
                <div className="mt-3 flex justify-between items-center text-xl p-3">
                    <b><p className='text-2xl ml-3'>${product.price}</p></b>
                    <button className='bg-yellow-300 rounded-2xl p-5 mr-4 mt-3 hover:bg-yellow-500 cursor-pointer font-medium' onClick={() => AddtoCartHandler(product)}>Add to Cart</button>
                </div>
                <Link className="w-1/2 m-auto block mb-4 text-center text-xl bg-blue-400 rounded-xl p-2 mt-3 hover:bg-blue-600 cursor-pointer font-medium " to={`/product/${product.id}`}>More Info</Link>
            </div>
)
}

export default ProductTemplate