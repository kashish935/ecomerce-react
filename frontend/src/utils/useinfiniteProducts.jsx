import React, { useEffect, useState } from 'react'
import { loadlazyproducts } from "../store/reducers/productSlice";
import axios from "../api/axiosconfig";
import { useDispatch, useSelector } from 'react-redux';

const useinfiniteProducts = () => {
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.productReducer)
    const [hasMore, sethasMore] = useState(true)


    const fetchproducts = async () => {
            try {
                const {data} =await axios.get(`/products?_limit=6&_start=${products.length}`)
                if(data.length == 0){
                    sethasMore(false)
                }else{
                    sethasMore(true)
                    dispatch(loadlazyproducts(data))
                }
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(() => {
                fetchproducts()
            },[])

return {products,hasMore,fetchproducts}
}

export default useinfiniteProducts