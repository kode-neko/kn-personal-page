import {createBrowserRouter} from 'react-router-dom'
import { HomePage } from '../pages'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

export default routers