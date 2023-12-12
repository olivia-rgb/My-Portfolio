import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"; 
import Projects from './Components/Projects'
import About from './Components/About'
import Contacts from './Components/Contacts'
import CV from './Components/CV'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contacts />,
  },
  {
    path: "/cv",
    element: <CV />,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)



