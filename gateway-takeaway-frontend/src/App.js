import './App.css';
import StartPage from './components/StartPage';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ManagerLoginPage from './components/ManagerLoginPage';
import ManagerPage from './components/ManagerPage';
import ManagerOrderPage from './components/ManagerOrderPage';
import RestaurantMenuPage from './components/RestaurantMenuPage';
import ManagerCreateUserPage from './components/ManagerCreateUserPage';
import ManagerCreateUserAndLogin from './components/ManagerCreateUserAndLogin';
import ManageRestaurants from './components/ManageRestaurants';
import CreateMenu from './components/CreateMenu';

function App() {

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
          <Route path="/" element={ <StartPage /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/shoppingcart" element={ <ShoppingCart /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/managerlogin" element={ <ManagerLoginPage /> } />
          <Route path="/managerpage" element={ <ManagerPage /> } />
          <Route path="/managerorderpage" element={ <ManagerOrderPage /> } />
          <Route path="/managercreateuserandlogin" element={ <ManagerCreateUserAndLogin /> } />
          <Route path="/managercreateuser" element={ <ManagerCreateUserPage /> } />
          <Route path="/restaurantmenu" element={ <RestaurantMenuPage /> } />
          <Route path="/managerestaurants" element={ <ManageRestaurants /> } /> 
          <Route path="/createmenu" element={<CreateMenu/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
