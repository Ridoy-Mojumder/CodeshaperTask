import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Root from "../Root/Root";
import Notifications from "../Components/Notifications/Notifications";
import Audience from "../Components/Audience/Audience";
import Campaigns from "../Components/Campaigns/Campaigns";
import Messages from "../Components/Messages/Messages";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/notifications",
          element: <Notifications/>
        },
        {
          path: "/audience",
          element: <Audience/>
        },
        {
          path: "/campaigns",
          element: <Campaigns/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
      ]
      
    },
  ]);