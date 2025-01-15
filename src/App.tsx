import { RouterProvider } from "react-router-dom";
import router from './router'
import './globals.css'
import { Provider } from "jotai";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
