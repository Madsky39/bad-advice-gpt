import {createBrowserRouter} from "react-router-dom";
import NotFound from "./views/Notfound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/Guest.Layout";
import Dashboard from "./views/Dashboard";
import { Navigate } from "react-router-dom";
import UserForm from "./views/UserForm";

const router= createBrowserRouter( [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },
            {
                path: '/users',
                element: <Users />
            },


        ]

    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '/*',
        element: <NotFound />
    }


])

export default router;