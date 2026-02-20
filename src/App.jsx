import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="w-screen min-h-screen h-auto py-5 px-15 text-white text-[20px] bg-[#452e4c]">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App