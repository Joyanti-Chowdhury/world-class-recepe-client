import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Recipes from "../pages/recipes/Recipes";
import AddRecipes from "../pages/addRecipes/AddRecipes";
import AllRecipes from "../pages/AllRecipes/AllRecipes";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          // element:<PrivateRoute> <Home></Home>  </PrivateRoute> 
          element:<Home></Home>  
        },
        {
          path:"recipes",
          element:<AllRecipes></AllRecipes>
        },
        {
          path:"add-recipe",
          element:<AddRecipes></AddRecipes>
        }
       
      ],
    
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
  ]);
  export default router;