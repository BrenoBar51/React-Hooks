import { createBrowserRouter } from "react-router-dom";
import Header from "../../components/Header";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
    },
    {
        path: '/contato',
        element: <Contact />
    },
    {
        path: '/sobre-nos',
        element: <AboutUs />
    },
    {
        path: '/login',
        element: <Login />
    }
]);