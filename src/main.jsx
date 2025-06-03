
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Single from './Pages/Single.jsx'
import Filter from './Pages/Filter.jsx'
import Checkout from './Pages/Checkout.jsx'
import Sign from './Pages/Sign.jsx'


const router = createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
             {
                path:"about",
                element:<About/>
            },
             {
                path:"contact",
                element:<Contact/>
            },
             {
                path:"login",
                element:<Login/>
            },
             {
                path:"Sign",
                element:<Sign/>
            },
            {
                path:"products/:id",
                element:<Single/>
            }, 
            {
                path:"filter",
                element:<Filter/>
            }, 
            {
                path:"checkout",
                element:<Checkout/>

            }
        ]
        
    }
])

createRoot(document.getElementById('root')).render(

    // <App />

    <RouterProvider router={router} />



)
