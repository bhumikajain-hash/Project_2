import { Link } from "react-router-dom"

const RecipeCard = (props) => {

    const {id,url, Title,Description,chef ,Ingredients, Instructions} = props.recipe
  return (
    <Link className="block duration-150 hover:scale-102 hover:shadow rounded overflow-hidden  w-[15rem] h-[24rem] bg-[#5a4161] shadow-lg shadow-black-900" to={`/recipes/details/${id}`}>
        <img className="object-cover w-full h-[10rem]" src={url} alt="" />
        <h1 className="[text-shadow:_1px_3px_rgb(0_0_0_/_40%)]  px-3 mt-3 font-bold text-2xl">{Title}</h1>
        <small className="ml-3 text-red-400">{chef}</small>
        <p className="text-sm p-3">{Description.slice(0 , 100)}....<small className="text-blue-300">see more</small></p>
    </Link>
  )
}

export default RecipeCard