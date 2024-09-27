import { createBrowserRouter } from 'react-router-dom'
import Welcome from '../pages/welcome'
import Register from '../pages/register'
import Login from '../pages/login'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
])

export default router