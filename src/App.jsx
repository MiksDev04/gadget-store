import Products from "./components/Products"
import Head from "./components/Head"
import { useState } from "react"
import YourCart from "./components/YourCart"

export default function App() {

  const [ cart, setCart] = useState([])
  const [ cartDisplay, setCartDisplay] = useState(false)

  return(<>
      <Head cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}/>
      <YourCart cartDisplay={cartDisplay} />
      <Products />
    </>)
}