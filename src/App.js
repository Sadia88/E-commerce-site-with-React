
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { ProductsLoader } from './components/loaders/ProductsLoader';
import Login from './components/LogIn/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Shipping from './components/Shpping/Shipping';
import SignUp from './components/SignUp/SignUp';

import Main from './layouts/Main';
import PrivateRoutes from './Routes/PrivateRoutes';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    children: [
    
    {
      path: "/",
      loader: ()=>fetch('products.json'),
      element: <Shop></Shop>
    },
    {
      path: "/orders",
      loader:ProductsLoader,
      element: <Orders></Orders>
    
    },
    {
      path: "/inventory",
      element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
    },
    {
      path: "/shipping",
      element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
   
    {
      path: "/about",
      element: <About></About>
    }
    ]
  } 
  ]);
  return (
    <div >
      



      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
