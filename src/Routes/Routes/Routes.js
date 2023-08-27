import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Package from "../../Page/Home/Package/Package";
import PackageDetails from "../../Page/Home/Package/PackageDetail/PackageDetails/PackageDetails";
import Blog from "../../Page/Home/Blog/Blog";
import Blogdetails from "../../Page/Home/Blog/Blogdetail/Blogdetails/Blogdetails";
import Contactus from "../../Page/Home/Contactus/Contactus";
import Login from '../../Page/Home/Login/Login';
import Signup from "../../Page/Home/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../../Shared/Secret/Secret";



 const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/packages',
                element:<Package></Package>,
                loader: ()=> fetch('http://localhost:5000/totalpackage')
            },
            {
                path:'/packages/:pid',
                element: <PackageDetails></PackageDetails>
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
                loader: ()=> fetch('http://localhost:5000/totalblog')

            },
            {
                path:'/blog/:bid',
                element: <Blogdetails></Blogdetails>
            },
            {
                path:'/contactus',
                element:<Contactus></Contactus>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            }
          
        ]
    }
])
export default router;