import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Tasks from "../Pages/DashBoard/Tasks/Tasks";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Registration from "../Pages/RegistrationPage/Registration";
import PrivetRoute from "./PrivetRoute";
import NewTask from "../Pages/DashBoard/NewTask/NewTask";
import PreviousTask from "../Pages/DashBoard/PreviousTask/PreviousTask";
import DashHome from "../Pages/DashBoard/DashHome/DashHome";
import UpdateTask from "../Pages/DashBoard/Tasks/UpdateTask/UpdateTask";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoard />
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <DashHome />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/tasks",
        element: <Tasks />,
      },
      {
        path: "/dashboard/newtask",
        element: (
          <PrivetRoute>
            <NewTask />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/previous",
        element: (
          <PrivetRoute>
            <PreviousTask />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <PrivetRoute>
            <UpdateTask />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default Route;
