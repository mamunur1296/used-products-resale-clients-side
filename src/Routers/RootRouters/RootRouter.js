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
import Payment from "../../Pages/Dasbord/User/Payment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Regester from "../../Pages/Regester/Regester";
import AdminRoute from "../PrivateRouters/AdminRoute";
import PrivateRoure from "../PrivateRouters/PrivateRoure";
import SelarRoute from "../PrivateRouters/SelarRoute";

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
            path: "/dasbord",
            element: (
              <PrivateRoure>
                <MyOrder></MyOrder>
              </PrivateRoure>
            ),
          },
          {
            path: "/dasbord/payment/:id",
            loader: ({ params }) =>
              fetch(`https://recycle-server.vercel.app/payment/${params.id}`),
            element: <Payment></Payment>,
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
            path: "/dasbord/myproduckt",
            element: (
              <SelarRoute>
                <MuProduckt></MuProduckt>
              </SelarRoute>
            ),
          },
          {
            path: "/dasbord/addproduckt",
            element: (
              <SelarRoute>
                <AddProjuct></AddProjuct>
              </SelarRoute>
            ),
          },
          // {
          //   path: "/dasbord/mybuers",
          //   element: (
          //     <SelarRoute>
          //       <MyBuirs></MyBuirs>,
          //     </SelarRoute>
          //   ),
          // },
          {
            path: "/dasbord/allselars",
            element: (
              <AdminRoute>
                <AllSellers></AllSellers>
              </AdminRoute>
            ),
          },
          {
            path: "/dasbord/allbuyers",
            element: (
              <AdminRoute>
                <ALLbuyers></ALLbuyers>
              </AdminRoute>
            ),
          },
          {
            path: "/dasbord/alluser",
            element: (
              <AdminRoute>
                <AllUserControl></AllUserControl>
              </AdminRoute>
            ),
          },
          {
            path: "/dasbord/reporteditems",
            element: (
              <AdminRoute>
                <ReportedItems></ReportedItems>
              </AdminRoute>
            ),
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
              fetch(
                `https://recycle-server.vercel.app/allproduckt?id=${params.id}`
              ),

            element: (
              <PrivateRoure>
                <SengleCatagory></SengleCatagory>
              </PrivateRoure>
            ),
          },
          {
            path: "/allProduckt/:id",
            loader: ({ params }) =>
              fetch(
                `https://recycle-server.vercel.app/allproduckt?id=${params.id}`
              ),

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
