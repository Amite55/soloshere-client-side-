import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import ErrorPage from "../Pages/ErrorPage";
import MyPostedJobs from "../Pages/MyPostedJobs";
import UpdateJob from "../Pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../Pages/MyBids";
import BidRequests from "../Pages/BidRequests";
import AllJobs from "../Pages/AllJobs";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true, 
            element: <Home/>
            // loader: () => fetch('http://localhost:5000/jobs')
            // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
          path: '/job/:id',
          element: <PrivateRoute><JobDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateJob/></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path: '/addJob',
          element: <PrivateRoute><AddJob/></PrivateRoute>,
        },
        {
          path: '/myPosted',
          element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
        },
        {
          path: '/myBids', 
          element: <PrivateRoute><MyBids/></PrivateRoute>
        },
        {
          path: '/bidRequest',
          element: <PrivateRoute><BidRequests/></PrivateRoute>
        },
        {
          path: '/jobs',
          element: <AllJobs/>
        }
        
      ]
    },
  ]);

export default router;