import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="bg-cyan-200">
         <div className="container  mx-auto">
            <RouterProvider router={Router} />
          </div>
         </div>
  </StrictMode>,
)
