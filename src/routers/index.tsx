import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from '@/App'
import Home from '@/views/home'
import About from '@/views/about'
import Explore from '@/views/explore'
import NotFound from '@/views/notfound'
import Login from '@/views/login'
import Register from '@/views/register'
import HotNews from '@/views/hotnews'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: <Home /> },
      { path: 'popular', element: <HotNews /> },
      { path: 'about', element: <About /> },
      { path: 'explore', element: <Explore /> },
      { path: '*', element: <NotFound /> },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export default function RouterConfig() {
  return <RouterProvider router={router} />
}
