import { createBrowserRouter } from "react-router-dom";
import Error from "../../Components/Error";
import MainLayout from "../../Layout/Main/MainLayout";
import AddProjuct from "../../Pages/AddProduckt/AddProjuct";
import Allproduckt from "../../Pages/Allcatproduckt/Allproduckt";
import SengleCatagory from "../../Pages/Allcatproduckt/SengleCatagory";
import Blog from "../../Pages/Blog/Blog";
import Blog1 from "../../Pages/Blog/BlogItem/Blog1";
import Blog2 from "../../Pages/Blog/BlogItem/Blog2";
import Blog3 from "../../Pages/Blog/BlogItem/Blog3";
import Blog4 from "../../Pages/Blog/BlogItem/Blog4";
import ALLbuyers from "../../Pages/Dasbord/Admin/ALLbuyers";
import AllSellers from "../../Pages/Dasbord/Admin/AllSellers";
import AllUserControl from "../../Pages/Dasbord/Admin/AllUserControl";
import ReportedItems from "../../Pages/Dasbord/Admin/ReportedItems";
import Dasbord from "../../Pages/Dasbord/Dasbord";
import MuProduckt from "../../Pages/Dasbord/Sellar/MuProduckt";
import MyBuirs from "../../Pages/Dasbord/Sellar/MyBuirs";
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
    errorElement: <Error></Error>,
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
        path: "/blog",
        element: <Blog></Blog>,
        children: [
          {
            path: "/blog",
            element: <Blog1></Blog1>,
          },
          {
            path: "/blog/blog2",
            element: <Blog2></Blog2>,
          },
          {
            path: "/blog/blog3",
            element: <Blog3></Blog3>,
          },
          {
            path: "/blog/blog4",
            element: <Blog4></Blog4>,
          },
        ],
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },

      {
        path: "/dasbord",
        errorElement: <Error></Error>,
        element: (
          <PrivateRoure>
            <Dasbord></Dasbord>
          </PrivateRoure>
        ),
        children: [
          {
            path: "/dasbord/myorderpage",
            element: (
              <PrivateRoure>
                <MyOrder></MyOrder>
              </PrivateRoure>
            ),
          },
          {
            path: "/dasbord/mywishlist",
            element: (
              <PrivateRoure>
                <MyWishlest></MyWishlest>
              </PrivateRoure>
            ),
          },
          {
            path: "/dasbord/addproduckt",
            element: <AddProjuct></AddProjuct>,
          },
          {
            path: "/dasbord/myproducts",
            element: <MuProduckt></MuProduckt>,
          },
          {
            path: "/dasbord/mybuers",
            element: <MyBuirs></MyBuirs>,
          },
          {
            path: "/dasbord/allselars",
            element: <AllSellers></AllSellers>,
          },
          {
            path: "/dasbord/allbuyers",
            element: <ALLbuyers></ALLbuyers>,
          },
          {
            path: "/dasbord/alluser",
            element: <AllUserControl></AllUserControl>,
          },
          {
            path: "/dasbord/reporteditems",
            element: <ReportedItems></ReportedItems>,
          },
        ],
      },
      {
        path: "/allProduckt",
        errorElement: <Error></Error>,
        element: (
          <PrivateRoure>
            <Allproduckt></Allproduckt>
          </PrivateRoure>
        ),
        children: [
          {
            path: "/allProduckt/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/allproduckt?id=${params.id}`),

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
