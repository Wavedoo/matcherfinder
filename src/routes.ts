import { createBrowserRouter } from "react-router";
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
// import App from "./App";
import Home from "./unusued/Home";
import Login from "./unusued/Login";
import Root from "./pages/Root";
import Signup from "./unusued/Signup";
import Details from "./pages/Details";
import TerribleHome from "./pages/TerribleHome";
import Upload from "./pages/Upload";
import AmplifyLogin from "./pages/amplify-ui/AmplifyLogin";
import { Link } from "react-router";

export default [
    layout("./pages/Root.tsx", [
        index("./pages/TerribleHome.tsx"),
        route("/login", "./pages/amplify-ui/AmplifyLogin.tsx"),
        // route("/register", "./pages/unused/Signup.tsx"),
        route("/matching", "./pages/Details.tsx"),
        route("/upload", "./pages/Upload.tsx")
    ])
] satisfies RouteConfig;


/* export const router = createBrowserRouter([
    { 
        path: "/", 
        Component: Root,
        children: [
            {index: true, Component: TerribleHome},
            {path: "/login", Component: AmplifyLogin},
            {path: "/register", Component: Signup},
            {path: "/matching", Component: Details},
            {path: "/upload", Component: Upload}
        ]
    }
]) */