import App from '../App';
import { createBrowserRouter } from 'react-router-dom'
import Checkout from '../pages/Checkout';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';
import WishList from '../pages/WishList';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,   // App sẽ là layout chung cho tất cả các route
    children: [
      { path: '', element: <Homepage /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'contact', element: <Contact /> },
      { path: 'error404', element: <Error404 /> },
      { path: 'wish-list', element: <WishList /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'login', element: <Login /> },
      { path: 'product-details', element: <ProductDetails /> }

      // Các route con khác
    ],
  },
]);

export default routes;
