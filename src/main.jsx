import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/home/Home.jsx';
import { Shop } from './components/shop/Shop.jsx';
import ProductInsider from './components/shop/ProductInsider.jsx';
import { Provider } from 'react-redux'
import { store } from './store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path:"/", element: <Home/>},
      {path:"/shop", element: <Shop/>},
      {path:"/product-insider", element: <ProductInsider/>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
