import { lazy, Suspense, useEffect } from "react";
import InfiniteScroll  from "react-infinite-scroll-component";
import useinfiniteProducts from "../utils/useinfiniteProducts";

const  ProductTemplate = lazy(() => import("../components/ProductTemplate")) ;


const Products = () => {
    const {products,hasMore,fetchproducts} = useinfiniteProducts()
    return(
    <InfiniteScroll 
        dataLength={products.length}
        hasMore = {hasMore}
        next={fetchproducts} 
        loader = {<h1>Loading...</h1>}
        endMessage={
            <p style={{textAlign: "center"}}>
                <b>Yay! You have seen it all</b>
            </p>
    }>
        <div className="flex flex-wrap">  
        {products.map((product) =>(
            <Suspense 
                key={product.id}
                fallback={<h1 className="text-center text-5xl text-yellow-500">LOADING...</h1>}>
                <ProductTemplate  product={product} />  
            </Suspense>
        ))}
        </div>
    </InfiniteScroll>
)
}

export default Products