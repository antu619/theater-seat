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
import AllEvent from "../pages/Dashboard/AllEvent";
import UpdateEvent from "../pages/Dashboard/UpdateEvent";
import Payment from "../pages/Dashboard/Payment";

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
          path: '/dashboard/all-events',
          element: <AllEvent />
        },
        {
          path: '/dashboard/all-users',
          element: <AllUsers />
        },
        {
          path: '/dashboard/upload-event',
          element: <UploadEvent />
        },
        {
            path: '/dashboard/update-event/:id',
            element: <UpdateEvent/>,
            loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`, {
                headers: {
                  authorization: `Bearer ${localStorage.getItem('token')}`
                }
              })
        },
        {
          path: '/dashboard/payment/:id',
          element: <Payment />,
          loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
        },
      ]
    }
  ]);

  export default router;
