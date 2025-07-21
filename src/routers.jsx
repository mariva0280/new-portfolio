import { createBrowserRouter } from "react-router-dom"
import App from './App'
import AllProjects from "./sections/Projects/AllProjects";
import HomePage from "./sections/Home/HomePage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'all-projects',
                element: <AllProjects />,
            },
        ],
    },
]);

export default router