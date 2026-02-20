import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipes from "../pages/Recipes"
import CreateRecipes from "../pages/CreateRecipes"
import OpenRecipe from "../pages/OpenRecipe"

const Mainroutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<OpenRecipe />} />

        <Route path="/createRecipes" element={<CreateRecipes />} />
    </Routes>
  )
}

export default Mainroutes