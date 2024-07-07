import { createBrowserRouter } from "react-router-dom"
import App from './App'
import MainContent from './sections/MainContent/MainContent'
import Projects from './sections/Projects/Projects'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainContent />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
        ],
    },
]);

export default router