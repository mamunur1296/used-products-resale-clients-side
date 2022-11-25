import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/Main/MainLayout";
import AddProjuct from "../../Pages/AddProduckt/AddProjuct";
import Allproduckt from "../../Pages/Allcatproduckt/Allproduckt";
import SengleCatagory from "../../Pages/Allcatproduckt/SengleCatagory";
import Dasbord from "../../Pages/Dasbord/Dasbord";
import MyOrder from "../../Pages/Dasbord/User/MyOrder";
import MyWishlest from "../../Pages/Dasbord/User/MyWishlest";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Regester from "../../Pages/Regester/Regester";
import PrivateRoure from "../PrivateRouters/PrivateRoure";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
      {
        path: "/post",
        element: <AddProjuct></AddProjuct>,
      },
      {
        path: "/dasbord",
        element: (
          <PrivateRoure>
            <Dasbord></Dasbord>
          </PrivateRoure>
        ),
        children: [
          {
            path: "/dasbord/myorderpage",
            element: <MyOrder></MyOrder>,
          },
          {
            path: "/dasbord/mywishlist",
            element: <MyWishlest></MyWishlest>,
          },
        ],
      },
      {
        path: "/allProduckt",
        element: (
          <PrivateRoure>
            <Allproduckt></Allproduckt>
          </PrivateRoure>
        ),
        children: [
          {
            path: "/allProduckt/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/allproduckt?catagory=${params.id}`),

            element: (
              <PrivateRoure>
                <SengleCatagory></SengleCatagory>
              </PrivateRoure>
            ),
          },
        ],
      },
    ],
  },
]);
