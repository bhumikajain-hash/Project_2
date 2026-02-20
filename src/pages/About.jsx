
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen mx-auto min-h-screen  bg-[#4a3252] text-white py-20 px-16">
      
      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-24">
        <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-sm">Our Story</span>
        <h1 className="text-[5rem] font-black mt-4 [text-shadow:_4px_6px_black]">
          Passion For <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Cooking.</span>
        </h1>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* --- MAIN CONTENT (Split Layout) --- */}
      <div className="flex gap-20 items-center">
        
        {/* Left Side: Artistic Image Composition */}
        <div className="w-1/2 relative">
          <div className="relative w-[500px] h-[600px] z-10">
            <img 
              className="w-full h-full object-cover rounded-[60px] shadow-2xl border-4 border-white/10" 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
              alt="Chef Cooking" 
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#54415b] rounded-3xl rotate-12 flex items-center justify-center shadow-2xl border border-white/5">
             <span className="text-4xl">🍳</span>
          </div>
        </div>

        {/* Right Side: Textual Story */}
        <div className="w-1/2 space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            We believe that <span className="text-orange-400">every recipe</span> tells a story of culture and love.
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            Founded in 2024, our platform was built for the home cooks who want to elevate their culinary skills. We don't just provide instructions; we provide a community where taste meets technique.
          </p>

          <div className="grid grid-cols-2 gap-8 py-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-3xl font-bold">500+</h4>
              <p className="text-gray-500 uppercase tracking-tighter text-sm">Handpicked Recipes</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-3xl font-bold">50+</h4>
              <p className="text-gray-500 uppercase tracking-tighter text-sm">Master Chefs</p>
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you're looking for a quick 15-minute dinner or a complex 5-course gourmet meal, our database is curated to ensure success in every bite.
          </p>

          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-4 bg-white/5 hover:bg-orange-500 transition-all px-8 py-4 rounded-full border border-white/10 font-bold"
          >
            <span>Back to Kitchen</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* --- VISION CARDS --- */}
      <div className="flex justify-between mt-32 gap-10">
        <div className="w-[380px] p-10 bg-[#3d2e44] rounded-[40px] border border-white/5 hover:bg-[#483750] transition-colors">
          <div className="text-4xl mb-6">🌿</div>
          <h3 className="text-2xl font-bold mb-4">Fresh Ingredients</h3>
          <p className="text-gray-400 leading-relaxed">We prioritize seasonal and organic ingredients in all our curated masterclasses.</p>
        </div>

        <div className="w-[380px] p-10 bg-[#3d2e44] rounded-[40px] border border-white/5 hover:bg-[#483750] transition-colors">
          <div className="text-4xl mb-6">🤝</div>
          <h3 className="text-2xl font-bold mb-4">Global Community</h3>
          <p className="text-gray-400 leading-relaxed">Join thousands of foodies sharing their unique twists on classic international dishes.</p>
        </div>

        <div className="w-[380px] p-10 bg-[#3d2e44] rounded-[40px] border border-white/5 hover:bg-[#483750] transition-colors">
          <div className="text-4xl mb-6">✨</div>
          <h3 className="text-2xl font-bold mb-4">Chef Secrets</h3>
          <p className="text-gray-400 leading-relaxed">Get access to professional tips that you won't find in standard cookbooks.</p>
        </div>
      </div>

    </div>
  );
};

export default About;