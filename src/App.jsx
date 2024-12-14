
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Main from './Layout/Main'
import Home from './componets/Home/Home';
import AddUser from './componets/Add user/AddUser';
import UpdateUser from './componets/UpdateUser/UpdateUser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AddUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/UpdateUser",
        element: <UpdateUser></UpdateUser>,
      },
    ],
  },
]);
function App() {

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
