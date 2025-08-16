import { useDispatch, useSelector } from "react-redux"
import { asyncupdateruser } from "../store/actions/userActions";


const Cart = () => {
    const dispatch = useDispatch()
    const users= useSelector((state) => state.userReducer.users)
    const products= useSelector((state) => state.productReducer.products)



    const IncreaseQuantityHandler = (index,product) => {
        const copyuser = {...users, cart : [...users.cart]}

        copyuser.cart[index] =  {
            ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity +1
            };
        dispatch(asyncupdateruser(copyuser.id,copyuser))
    }

    const DecreaseQuantityHandler = (index,product) => {
        const copyuser = {...users, cart : [...users.cart]}

        if(users.cart[index].quantity > 0){
            copyuser.cart[index] =  {
            ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity - 1
            };
        }else{
            copyuser.cart.splice(index,1)
        }
        dispatch(asyncupdateruser(copyuser.id,copyuser))
    }

    const cartItems = users.cart.map((c,index) => {
        return (
        <li className="flex items-center justify-between mb-10 bg-gray-200 p-2 rounded shadow-2xl"  key={c.productId}>
            <img
            className="w-[10vmax] mr-10  h-[10vmax] object-cover" src={c.product.image} 
            alt="" 
            />
            <span className="text-2xl font-medium">{c.product.title}</span>
            <span className="text-2xl font-medium ">${c.product.price}</span>
            <p className="flex justify-center items-center">
                <button onClick={() => DecreaseQuantityHandler(index,c)} className="text-4xl">-</button>
                <span className="mx-3 p-1 rounded bg-gray-200 text-2xl font-medium text-center">
                    {" "}
                    {c.quantity}
                </span>
                <button onClick={() => IncreaseQuantityHandler(index,c)} className="text-3xl mr-4 ">+</button>
            </p>
    </li>
    )
})
    
  return (
    <ul>{cartItems}</ul>
  )
}

export default Cart