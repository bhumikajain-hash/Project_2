import { useContext } from "react"
import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid'
import { recipecontext } from "../context/ContextRecipe"
import { toast } from "react-toastify"

const Create = () => {
  const {data,setdata} = useContext(recipecontext)
    const{register,handleSubmit,formState:{errors},reset}=useForm()


    const onSubmit= (recipe)=>{
      recipe.id = nanoid()
     const copydata = [...data]
     copydata.push(recipe)

     setdata(copydata)

     localStorage.setItem("recipe", JSON.stringify(copydata))

  //   setdata([...data, recipe])
     toast.success("New recipe Added")
      reset();

    }


  return (
    <form className="flex flex-col mt-10 gap-5 w-[40%] m-[30%] p-10 h-[32rem] bg-[#674770] rounded shadow-2xl" 
    onSubmit={handleSubmit(onSubmit)}>
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
         {errors.chef && <small  className="text-red-400 block">{String(errors?.chef?.message)}</small>}


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
         className="border-2 w-40 mt-5">Save Recipe</button>




    </form>
  )
}

export default Create