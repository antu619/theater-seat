import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import JoinUs from "../pages/JoinUs";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import EventDetails from "../pages/EventDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/join',
          element: <JoinUs />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/events/:id',
          element: <EventDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        }
      ]
    }
  ]);

  export default router;