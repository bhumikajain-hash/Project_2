
import RecipeCard from '../components/RecipeCard'

const Favourite = () => {
    const favourite=  JSON.parse(localStorage.getItem("fav")) || []
    
  
    const renderrecipe = favourite.map((recipe)=>{
     return ( <RecipeCard key = {recipe.id} recipe={recipe}/>)
    })
    return (
      <div><h1 className="text-3xl">Favourites</h1>
       <div className="mt-5 flex flex-wrap gap-6">{favourite.length>0? renderrecipe : <h4>No favourite Found!</h4>}</div> 
      </div>
    )
  
}

export default Favourite