
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import router from './routers'

const rootEle = document.getElementById('app')
const root = createRoot(rootEle)

root.render(
  <RouterProvider router={router}/>
)