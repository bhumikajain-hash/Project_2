import { useContext } from "react"
import { recipecontext } from "../context/ContextRecipe"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useState } from "react"

const OpenRecipe = () => {
  const {data,setdata}=useContext(recipecontext)
  const [favourite, setfavourite] = useState(JSON.parse(localStorage.getItem("fav")) || [])

   const params = useParams()
  const recipe = data.find((recipe) => params.id == recipe.id)

  const {register, handleSubmit, formState:{errors}} = useForm({
     values:recipe,
  })
  const Navigate = useNavigate()
  
  const updatehandler= (recipe)=>{
    /*  const copydata = [...data]
    //  copydata.push(recipe)
    //  setdata(copydata)*/
    const index = data.findIndex((recipe)=> params.id == recipe.id )
    const copydata =[...data]
    copydata[index]={...copydata[index], ...recipe}
    setdata(copydata)
    localStorage.setItem("recipe", JSON.stringify(copydata))
    const favIndex = favourite.findIndex((r) => params.id == r.id);
  if (favIndex !== -1) {
    const copyFav = [...favourite];
    copyFav[favIndex] = copydata[index]; // Update the favorite with new details
    setfavourite(copyFav);
    localStorage.setItem("fav", JSON.stringify(copyFav));
  }
    toast.success("Recipe Updated!") 
  }

  const DeleteHandler = ()=>{
     const filterdata = data.filter((recipe) => params.id != recipe.id)
     setdata(filterdata)
     localStorage.setItem("recipe", JSON.stringify(filterdata))
     UnFavouriteHandler() 
     Navigate(-1)
     toast.error("Recipe Deleted!")
  }

  
  const backhandler=()=>{
    Navigate(-1)
  }

  
 

  const FavouriteHandler= ()=>{
   const copyfav = [...favourite]
   copyfav.push(recipe)
   setfavourite(copyfav)
   localStorage.setItem("fav", JSON.stringify(copyfav))
  }

  const UnFavouriteHandler= ()=> {
   const filterdata= favourite.filter((r) => r.id != recipe?.id)
   setfavourite(filterdata)
   localStorage.setItem("fav", JSON.stringify(filterdata))
  }
  
  return (
   recipe? <div className="min-w-[80%] min-h-screen h-auto flex relative ">
      {/* from remix icon, also coy source link of it and paste it in index.html*/}
    <div className="bg-[#54415b] w-[30rem] shadow-xl m-5 h-auto p-5 relative"  >
      {favourite.find((r) => r.id == recipe.id) ? (<i 
      onClick={UnFavouriteHandler} 
      className="ri-poker-hearts-fill text-3xl text-red-400 absolute right-8">

      </i>)
      :(<i 
      onClick={FavouriteHandler} 
      className="ri-poker-hearts-line text-3xl text-red-400 absolute right-8 ">

      </i>  )  
  }

    <h1 className="text-[3rem] [text-shadow:_2px_4px_black] ">"{recipe.Title}"</h1>
    <img className="shadow-sm shadow-black h-54 w-[23rem] ml-5 mt-5 hover:scale-101 " src={recipe.url} alt="" />
    <span className="text-orange-200 text-[14px] px-4 ">Chef Name :</span><small className="text-orange-400">{recipe.chef}</small>
    <p className="px-4 text-[18px] mt-4">{recipe.Description}</p>
    <h2 className=" mt-3 text-orange-200 px-3 ">*Ingredients:</h2> <p className="text-[16px] px-5">{recipe.Ingredients}</p>
    <h2 className=" mt-3 text-orange-200 px-3">*Important Instructions:</h2> 
    <p className="text-[16px] px-5">{recipe.Instructions}</p>
  
    </div>

    <div className="w-1/2  p-[0px] ">
     <button className="rounded absolute right-8 bg-[#8d7297] px-3 text-[#eee7f1] [text-shadow:_2px_2px_black] font-bold" 
      onClick={backhandler}>Back</button>

      <form className="absolute top-3 flex flex-col mt-12 gap-6 w-[25%] m-[30%] p-6 min-h-[32rem] bg-[#54415b] rounded shadow-2xl" 
    onSubmit={handleSubmit(updatehandler)}>

      <h1 className="text-[2rem] font-bold [text-shadow:_2px_3px_black]">Update Recipe</h1>
        <input
        {...register("url", {required:"This can't be empty"})}
        
         className="border-b-2 "
         type="url" 
         placeholder="Enter Image URL"/>
        {errors.url && <small  className="text-red-400 block">{String(errors?.url?.message)}</small>}
        

         <input 
          {...register("Title", {required:"This can't be empty"})}
         className="border-b-2 "
         type="text"
         placeholder= "Recipe Title"/>
         {errors.url && <small  className="text-red-400 block">{String(errors?.url?.message)}</small>}
       
         <input 
          {...register("chef", {required:"This can't be empty"})}
         className="border-b-2 "
         type="text"
         placeholder= "Chef name"/>
         {errors.url && <small  className="text-red-400 block">{String(errors?.url?.message)}</small>}


         <textarea 
          {...register("Description", {required:"This can't be empty"})}
         className="border-b-2 "
         placeholder="Start writing....."></textarea>

         <textarea 
          {...register("Ingredients", {required:"This can't be empty"})}
         className="border-b-2 "
         placeholder="Ingredients.."></textarea>
        
         <textarea 
          {...register("Instructions", {required:"This can't be empty"})}
         className="border-b-2 "
         placeholder="Write Instructions separated by ',' "></textarea>

         <button
         className="border-2 rounded w-40 mt-5 bg-[#b09ab8] font-bold [text-shadow:_2px_2px_black]">Update Recipe</button>
         
          <button
         onClick= {DeleteHandler}
         className="border-2 rounded w-40 mt-5 bg-[#9d2d6e] font-bold [text-shadow:_2px_2px_black]">Delete Recipe</button>

         
  </form>
       

    </div>

    </div> :"Loading...."
    
  )
}


export default OpenRecipe