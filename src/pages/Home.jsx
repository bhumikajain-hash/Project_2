import { useContext } from "react";
import { recipecontext } from "../context/ContextRecipe";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useContext(recipecontext);
  const navigate = useNavigate();

  return (
    <div className="max-w-screen m-0 min-h-screen bg-[#3e2f43] text-white pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[550px] flex items-center px-16 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 w-1/2">
          <span className="text-orange-400 font-bold tracking-widest uppercase text-sm">Premium Recipes</span>
          <h1 className="text-[5rem] font-black leading-[1.1] mt-4 [text-shadow:_4px_6px_black]">
            Cook Like <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">A Master.</span>
          </h1>
          <p className="text-gray-400 text-xl mt-6 max-w-[450px] leading-relaxed">
            Unlock over 500+ secret recipes from world-class chefs. Simple ingredients, extraordinary results.
          </p>
          <button 
            onClick={() => navigate("/recipes")}
            className="mt-10 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-1 active:scale-95"
          >
            Explore All Recipes
          </button>
        </div>

        {/* Hero Image with Floating Effect */}
        <div className="relative w-1/2 flex justify-center">
          <div className="relative w-[450px] h-[450px]">
             <img 
               className="w-full h-full object-cover rounded-[40px] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 border-8 border-[#3d2e44]" 
               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
               alt="Gourmet Food" 
             />
             <div className="absolute -bottom-6 -left-6 bg-[#54415b] p-6 rounded-2xl shadow-xl border border-white/10">
                <p className="text-orange-400 font-bold text-2xl">4.9 ★</p>
                <p className="text-sm text-gray-300">Avg. Chef Rating</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- TRENDING SECTION --- */}
      <div className="px-16 mt-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold [text-shadow:_2px_3px_black]">Trending Now</h2>
            <div className="w-20 h-1.5 bg-orange-500 mt-2 rounded-full"></div>
          </div>
          <p className="text-gray-400 italic">Showing {data?.length || 0} unique culinary delights</p>
        </div>

        {/* FIXED GRID (Non-responsive) */}
        <div className="flex flex-wrap gap-10">
          {data && data.length > 0 ? (
            data.map((recipe) => (
              <Link 
                to={`/recipes/details/${recipe.id}`} 
                key={recipe.id} 
                className="group w-[370px] bg-[#3d2e44] rounded-[30px] overflow-hidden shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-white/5 hover:border-orange-500/30"
              >
                {/* Image Container */}
                <div className="relative h-[280px] overflow-hidden">
                  <img 
                    src={recipe.url} 
                    alt={recipe.Title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3d2e44] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {recipe.chef}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors truncate">
                    {recipe.Title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 h-10 mb-6">
                    {recipe.Description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-5 border-t border-white/10">
                    <span className="text-xs text-orange-200 uppercase tracking-widest font-semibold">View Recipe</span>
                    <div className="w-10 h-10 rounded-full bg-[#54415b] flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <span className="text-xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full text-center py-20 bg-[#3d2e44] rounded-3xl border-2 border-dashed border-white/10">
              <p className="text-gray-400 text-xl italic">Kitchen is empty! Add your first masterpiece.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Home;