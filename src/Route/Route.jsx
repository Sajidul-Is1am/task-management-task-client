import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Tasks from "../Pages/DashBoard/Tasks/Tasks";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Registration from "../Pages/RegistrationPage/Registration";
import PrivetRoute from "./PrivetRoute";
import NewTask from "../Pages/DashBoard/NewTask/NewTask";

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
        path: "/dashboard/tasks",
        element: <Tasks />,
      },
      {
        path: "/dashboard/newtask",
        element: <NewTask />,
      },
    ],
  },
]);

export default Route;
