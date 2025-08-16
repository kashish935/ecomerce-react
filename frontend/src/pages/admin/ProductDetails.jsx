import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { asyncdeleteproduct, asyncupdateproduct } from "../../store/actions/productActions";

const ProductDetails = () => {
  const {id} = useParams()
  
  
  const {
    productReducer:{products} ,
    userReducer : {users}
    } = useSelector((state) => state)
  const product = products?.find((product) => product.id == id);

  const {register,reset,handleSubmit} = useForm({
    defaultValues :{
      image : product?.image,
      title: product?.title,
      price : product?.price,
      category : product?.category,
      description : product?.description,
    }
  })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const UpdateProductHandler = (product) => {
        console.log(product);
        dispatch(asyncupdateproduct(id,product))
    }

    const DeleteHandler = () => {
      dispatch(asyncdeleteproduct(id))
      navigate("/products")
    }


  return  product ?(
    <>
    <div className="w-full flex justify-between items-center ">
      <img className="w-[500px] h-[500px] object-cover" src={product.image} alt="" />
      <div className="w-1/2 px-3 h-1/2 ">
        <h1 className="text-5xl font-bold mb-20 ">{product.title}</h1>
        <h2 className="mb-5 text-4xl text-green-500 mb-20 text-start font-medium">${product.price}</h2>
        <p className="mb-5 text-start text-xl font-small">{product.description}</p>
        <button className="bg-yellow-300 rounded-2xl p-5 mb-4 ml-50 mt-3 hover:bg-yellow-500 text-2xl cursor-pointer font-medium">Add to Cart</button>

      </div>
    </div>
    <hr />
    <br/>
    <br/>
    
    {users && users?.isAdmin &&
    <form onSubmit={handleSubmit(UpdateProductHandler)} className='flex w-full flex-col justify-start items-start '>
        <h1 className="text-2xl mb-6 mt-4 font-medium text-red-500 font-medium">Change the details if needed!!</h1>
        <input 
            {...register("image")}
            className='mb-3 outline-0 border-b p-2 text-3xl' 
            type='url' 
            placeholder='image url'
        />
        <input 
            {...register("title")}
            className='mb-3 outline-0 border-b p-2 text-3xl' 
            type='text' 
            placeholder='title'
        />
        <input 
            {...register("price")}
            className='mb-3 outline-0 border-b p-2 text-3xl' 
            type='number' 
            placeholder='0.00'
        />
        <textarea 
            {...register("description")}
            className='mb-3 outline-0 border-b p-2 text-3xl' 
            placeholder='enter description here'
        ></textarea>
        <input 
            {...register("category")}
            className='mb-3 outline-0 border-b p-2 text-3xl' 
            type='text' 
            placeholder='category name'
        />

        <button className="mt-5 px-4 p-3 bg-blue-400 rounded-xl cursor-pointer text-2xl font-medium hover:bg-blue-600 ">Update Product </button>

        <button type="button" onClick={DeleteHandler} className="mt-5 px-4 py-3  bg-red-500 rounded-xl font-medium cursor-pointer text-2xl hover:bg-red-600"> Delete Product 
    </button>

    </form>
    }
    </>
  ) : "Loading.."
}

export default ProductDetails