import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RestaurantData from './data.json';
import { v4 as uuidv4 } from 'uuid';
import ManagerPage from './components/ManagerPage';
import ManagerOrderPage from './components/ManagerOrderPage';
import RestaurantMenuPage from './components/RestaurantMenuPage';
import ManagerCreateUserPage from './components/ManagerCreateUserPage';

function App() {

  const restaurants = RestaurantData.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

  return (
    <BrowserRouter>
      <div>
        <div className="headerContainer">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><div className="brandText">Gateway Takeaway</div></Link>
          <Link to="/searchfield" style={{ color: 'inherit', textDecoration: 'none' }}><div>🔍Search</div></Link>
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}><div>Login</div></Link>
          <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}><div>Create account</div></Link>
          <Link to="/orders" style={{ color: 'inherit', textDecoration: 'none' }}><div className="orderText">Orders</div></Link>
          <Link to="/managerpage" style={{ color: 'inherit', textDecoration: 'none' }}><div>Manager(placeholder)</div></Link>
          <Link to="/restaurantmenu"></Link>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shoppingcart" element={ <ShoppingCart /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/managerpage" element={ <ManagerPage /> } />
          <Route path="/managerorderpage" element={ <ManagerOrderPage /> } />
          <Route path="/managercreateuser" element={ <ManagerCreateUserPage /> } />
          <Route path="/restaurantmenu" element={ <RestaurantMenuPage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
