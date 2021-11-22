import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ShoppingCart from './components/ShoppingCart'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RestaurantData from './data.json';
import { v4 as uuidv4 } from 'uuid';
import ManagerPage from './components/ManagerPage';
import ManagerOrderPage from './components/ManagerOrderPage'

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
          <Link to="/managerpage"></Link>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shoppingcart" element={ <ShoppingCart /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/managerpage" element={ <ManagerPage /> } />
          <Route path="/managerorderpage" element={ <ManagerOrderPage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
