import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './components/Root.jsx'
import Mycollection from './components/Mycollection.jsx'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/Book-Keeper/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: 'my-collection',
        element: <Mycollection />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
