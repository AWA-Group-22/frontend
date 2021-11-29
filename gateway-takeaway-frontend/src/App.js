import './App.css';
import StartPage from './components/StartPage';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect, Component } from 'react';
import ManagerPage from './components/ManagerPage';
import ManagerOrderPage from './components/ManagerOrderPage';
import RestaurantMenuPage from './components/RestaurantMenuPage';
import ManagerCreateUserPage from './components/ManagerCreateUserPage';
import UserOrderPage from './components/UserOrderPage';
import jwt from 'jsonwebtoken';

const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {

  const [ userJwt, setUserJwt ] = useState(jwtFromStorage);

  let authRoutes = <>
                  <Route path="/login" element={ <LoginPage login={(token) => {
                    window.localStorage.setItem('appAuthData', token);
                    setUserJwt(token);
                  }} /> } />
                  <Route path="/signup" element={ <SignUpPage /> } />
                  <Route path="/home" element={ <Home /> } />
                  <Route path="/orders" element={ <UserOrderPage /> } />
                  <Route path="/shoppingcart" element={ <ShoppingCart /> } />
                  <Route path="/managerpage" element={ <ManagerPage /> } />
                  <Route path="/managerorderpage" element={ <ManagerOrderPage /> } />
                  <Route path="/managercreateuser" element={ <ManagerCreateUserPage /> } />
                  <Route path="/restaurantmenu" element={ <RestaurantMenuPage /> } />
                </>

  if (userJwt != null) {
    authRoutes = <Route path="/home" element={ <Home userJwt={ userJwt } logout={() => setUserJwt(null)}/> }/>
  }

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
          <Route path="/" element={ <StartPage userJwt={ userJwt }/> }/>
          {
            authRoutes
          }
          <Route path="*" element={ <StartPage userJwt={ userJwt }/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
