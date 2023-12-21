import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Tasks from "../Pages/DashBoard/Tasks/Tasks";
import LoginPage from "../Pages/LoginPage/LoginPage";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard/tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default Route;
