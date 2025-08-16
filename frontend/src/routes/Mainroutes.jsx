import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import UnAuthWrapper from './UnAuthWrapper'

const Cart = lazy(() => import("../pages/Cart"))
const AuthWrapper = lazy(() => import("./AuthWrapper"))
const PageNotFound = lazy(() => import("../pages/PageNotFound"))
const UserProfile = lazy(() => import("../pages/user/UserProfile"))
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"))
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"))
const Register = lazy(() => import("../pages/Register"))
const Login = lazy(() => import("../pages/Login"))
const Products = lazy(() => import("../pages/Products"))



const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <Products /> } />

            <Route path='/login' element={<UnAuthWrapper>
                <Login />
            </UnAuthWrapper> 
            } />
            <Route path='/register' element={<UnAuthWrapper>
                <Register />
            </UnAuthWrapper> 
            } />

            
            <Route path='/admin/create-product' element={<AuthWrapper>
                <CreateProduct />
            </AuthWrapper>}
            />
            <Route path='/admin/user-profile' element={<AuthWrapper>
                <UserProfile />
            </AuthWrapper>}
            />

            <Route path='/product/:id' element={<AuthWrapper>
                <ProductDetails />
            </AuthWrapper>} 
            />


            <Route path='/cart' element={<AuthWrapper>
                <Cart />
            </AuthWrapper>}
            />

            <Route path='*' element={<PageNotFound />} />
            
        </Routes>
)
}

export default Mainroutes