import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ErrorPage from './error-page.jsx'
import ExampleBlogPage from './components/pages/ExampleBlogPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog",
    element: <ExampleBlogPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
