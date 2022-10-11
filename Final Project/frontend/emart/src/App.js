import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home1 from './component/Home1';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Register from './component/Register';
import Login from './component/Login';
import Myorders from './component/Myorders';
import Customerlogin from './component/Customerlogin';
import Modal from './component/ShowModal';
import AdminAddProduct from './component/Admin/AdminAddProduct';
import AdminEditProduct from './component/Admin/AdminEdit';
import Dashboard from './component/Admin/Dashboard';
import GetProduct from './component/Admin/GetProducts';
import { BrowserRouter, Routes, Route, Navigate ,Link} from "react-router-dom";
import * as routes from './constant/routes';

function App() {

  return (
    <div className='wrapper'>
    <BrowserRouter>
        {/* {currentUser && (
          <li className="nav-item">
            <Link to={"/private"} className="nav-link">
              Private
            </Link>
          </li>
        )}
      </div> */}

  <Navbar/>
      <Routes>
        <Route exact path={routes.PRODUCTS} element={<Products/>} />
        <Route exact path={routes.PRODUCT} element={<Product/>} />
        <Route exact path={routes.CART} element={<Cart/>} />
        <Route exact path={routes.REGISTER} element={<Register/>} />
        <Route exact path={routes.LOGIN} element={<Login/>} />
        <Route exact path={routes.CUSTOMERLOGIN} element={<Customerlogin/>} />
        <Route exact path={routes.ADDPRODUCT} element={<AdminAddProduct/>} />
        <Route exact path={routes.EDITPRODUCT} element={<AdminEditProduct/>} />
        <Route exact path={routes.MODAL} element={<Modal/>} />
        <Route exact path={routes.ADMIN_DASHBOARD} element={<Dashboard/>} />
        <Route exact path={routes.GET_PRODUCT} element={<GetProduct/>} />
        <Route exact path={routes.HOME1} element={<Home1/>} />
        <Route exact path={routes.MYORDERS} element={<Myorders/>} />
        {/* <Navigate to={routes.PRODUCTS} /> */}
      </Routes>
     <Footer/> 
    </BrowserRouter>
    </div>
  );
}

export default App;
