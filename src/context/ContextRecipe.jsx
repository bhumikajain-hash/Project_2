import { useEffect } from "react"
import { useState ,createContext} from "react"

export const recipecontext = createContext(null)

const ContextRecipe = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {
      setdata(JSON.parse(localStorage.getItem("recipe")) || [])
    }, [])
    
  return (
    <recipecontext.Provider value={{data, setdata}} >{props.children}</recipecontext.Provider >
  )
}

export default ContextRecipe