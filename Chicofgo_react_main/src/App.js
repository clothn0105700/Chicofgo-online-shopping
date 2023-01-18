import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar/Navbar';
// import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import Event from './Pages/Event';
import Coupon from './Pages/Coupon/Coupon';
import Account from './Pages/Account/Account';
import Password from './Pages/Account/Password/ChangePassword';
import Creditcard from './Pages/Account/CreditCard/CreditCard';
import CardDetail from './Pages/Account/CreditCard/CardDetail';
import Address from './Pages/Account/Address/Address';
import MemberSideBar from './Pages/Account/Components/MemberSideBar';
import AddressDetail from './Pages/Account/Address/AddressDetail';
// import ChangePassword from './Pages/account/password/changePassword';
// import Sidebar from './Layout/sidebar/sidebar'
// import Navbaro from './component/navbar-or'
// import Carousel from './component/carousel'
import Path from './Layout/Item/Path/Path';
import Footer from './Layout/Footer/Footer';
import ProductDetail from './Pages/Products/ProductDetail/ProductDetailPage';
// order
import OrderHistory from './Pages/Order/OrderHistory';
import OrderStatus from './Pages/Order/OrderStatus';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Home from './Pages/Home/Home';
import ScrollToTop from './Hook/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* <Path /> */}
        {/* <MemberSideBar /> */}
        <ScrollToTop>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Home />} />
            {/*product*/}
            <Route path="/products">
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/product_detail/:product_id"
                element={<ProductDetail />}
              />
            </Route>
            {/*product*/}
            <Route path="event" element={<Event />} />
            <Route path="coupon" element={<Coupon />} />
            <Route path="account" element={<Account />} />
            <Route path="password" element={<Password />} />
            <Route path="creditcard" element={<Creditcard />} />
            <Route path="cardDetail" element={<CardDetail />} />
            <Route path="address" element={<Address />} />
            <Route path="addressDatail" element={<AddressDetail />} />
            <Route path="orderHistory" element={<OrderHistory />} />
            <Route path="orderStatus" element={<OrderStatus />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* <Route path="/">
            <Route index element={}
          </Route> */}
          </Routes>
        </ScrollToTop>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
