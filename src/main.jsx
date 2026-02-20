import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import ContextRecipe from './context/ContextRecipe';

createRoot(document.getElementById('root')).render(
<ContextRecipe>
   <BrowserRouter>
       <App />
       <ToastContainer />
   </BrowserRouter>
</ContextRecipe>
)

