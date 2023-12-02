import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Components/Home/Home";
import Catagory from "../Components/Catagory/Catagory";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsDetails from "../Components/Newsdetails/NewsDetails";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Components/Terms/Terms";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/terms',
        element:<Terms></Terms>
      }
    ]
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      
      {
        path: '/category/:id',
        element: <Catagory></Catagory>,
        loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path:':id',
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

export default router;