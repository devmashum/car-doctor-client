import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import MyCart from "../Pages/MyCart/MyCart";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/book/:id',
                element: <PrivateRoute><BookService></BookService></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cardoctor-server-xi.vercel.app/services/${params.id}`),
            },
            {
                path: '/bookings',
                element: <Bookings></Bookings>
            },
            {
path: '/shop',
element:<Shop></Shop>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path:'/services',
                element: <ServicesPage></ServicesPage>
            }

        ]
    },
]);

export default router;