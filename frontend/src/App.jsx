import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asynccurrentuser } from "./store/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
//import { asyncloadproduct } from "./store/actions/productActions"

const App = () => {
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.userReducer)
  //const {products} = useSelector((state) => state.productReducer)

  useEffect(() => {
        !users && dispatch(asynccurrentuser())
  },[users])

  /*useEffect(() => {
        products.length == 0 && dispatch(asyncloadproduct())
  },[products])*/

  return (
    <div className=" w-screen px-[10%] ">
    <Nav />
      <Mainroutes />
    </div>
  )
}

export default App