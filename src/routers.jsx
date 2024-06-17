import { createBrowserRouter } from "react-router-dom"
import App from './App'
import Home from './sections/Home/Home'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/skills',
                element: <Skills />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

export default router