import { RouterProvider } from "react-router-dom";
import router from './router'
import './globals.css'
import { Provider } from "jotai";
import { NotiStack } from "./components/organisms/notification";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
      <NotiStack />
    </Provider>
  )
}

export default App
