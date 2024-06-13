import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import JoinUs from "../pages/JoinUs";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import EventDetails from "../pages/EventDetails";
import AvailableEvents from "../pages/Dashboard/AvailableEvents";
import AllUsers from "../pages/Dashboard/AllUsers";
import UploadEvent from "../pages/Dashboard/UploadEvent";

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
          element: <PrivateRoute><EventDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
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
        },
        {
          path: '/dashboard/available-events',
          element: <AvailableEvents />
        },
        {
          path: '/dashboard/all-users',
          element: <AllUsers />
        },
        {
          path: '/dashboard/upload-event',
          element: <UploadEvent />
        },
      ]
    }
  ]);

  export default router;
