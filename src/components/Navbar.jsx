import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className ="flex justify-center sticky top-0 z-50">
        <div className ="flex text-[#deadf2] text-lg justify-center shadow-xl mb-10 w-[30rem] gap-7 bg-[#4b3952]">
        <NavLink className= {(e) => e.isActive ? "text-red-400": " "} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-400": " "} to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-400" : " "} to="/recipes">Recipe</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-400" : " "} to="/CreateRecipes">Create-Recipe</NavLink>
        </div>
    </div>
  )
  
}

export default Navbar