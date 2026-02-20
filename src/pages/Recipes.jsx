import { useContext } from "react"
import { recipecontext } from "../context/ContextRecipe"
import RecipeCard from "../components/RecipeCard"

const Recipes = () => {
  const {data} = useContext(recipecontext)

  const renderrecipe = data.map((recipe)=>{
   return ( <RecipeCard key = {recipe.id} recipe={recipe}/>)
  })
  return (
    <div><h1 className="text-3xl">Recipes</h1>
     <div className="mt-5 flex flex-wrap gap-6">{data.length>0? renderrecipe : <h4>No Recipe Found!</h4>}</div> 
    </div>
  )
}

export default Recipes