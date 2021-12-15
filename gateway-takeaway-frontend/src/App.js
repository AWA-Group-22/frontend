import './App.css';
import StartPage from './components/StartPage';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import ManagerLoginPage from './components/ManagerLoginPage';
import ManagerPage from './components/ManagerPage';
import ManagerOrderPage from './components/ManagerOrderPage';
import RestaurantMenuPage from './components/RestaurantMenuPage';
import ManagerCreateUserPage from './components/ManagerCreateUserPage';
import UserOrderPage from './components/UserOrderPage';
import ManageRestaurants from './components/ManageRestaurants';
import CreateMenu from './components/CreateMenu';
import OrderDonePage from './components/OrderDonePage';
import jwt from 'jsonwebtoken';
import { UserAuthContext } from './components/Contexts';
import ManagerCreateCategory from './components/ManagerCreateCategory';
import ResultPage from './components/ResultPage';

const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App(props) {

  const initialAuthData = {
    jwt: jwtFromStorage,
    login: (newValueForJwt) => {
      const newAuthData = { ...userAuthData,
          jwt: newValueForJwt
        };
      window.localStorage.setItem('appAuthData', newValueForJwt);
      setUserAuthData(newAuthData);
    },
    logout: () => {
      window.localStorage.removeItem('appAuthData');
      setUserAuthData({...initialAuthData});
    }
  };

  const [ userAuthData, setUserAuthData ] = useState({...initialAuthData});

  let authRoutes = <>
    <Route path="/login" element={ <LoginPage /> } />
    <Route path="/managerlogin" element={ <ManagerLoginPage /> } />
    <Route path="/signup" element={ <SignUpPage /> } />
  </>

  if(userAuthData.jwt) {
    authRoutes = <>
    <Route path="/home" element={ <Home /> }/>
    <Route path="/orders" element={ <UserOrderPage /> }/>
    <Route path="/shoppingcart" element={ <ShoppingCart /> }/>
    <Route path="/managerpage" element={ <ManagerPage /> }/>
    <Route path="/managerorderpage" element={ <ManagerOrderPage /> }/>
    <Route path="/managercreateuser" element={ <ManagerCreateUserPage /> }/>
    <Route path="/restaurantmenu/:restaurant_id" element={ <RestaurantMenuPage /> }/>
    <Route path="/managerestaurants" element={ <ManageRestaurants /> }/>
    <Route path="/createmenu" element={ <CreateMenu /> }/>
    <Route path="/orderdonepage" element={ <OrderDonePage /> }/>
    <Route path="/createcategory" element={ <ManagerCreateCategory /> }/>
    <Route path="/resultpage" element={ <ResultPage /> }/>
    </>
  }

  return (
    <UserAuthContext.Provider value={ userAuthData }>
      <UserAuthContext.Consumer>
        { value => (<div>Login status: { value.jwt != null ? "Logged in": "Not logged in" }</div>) }
      </UserAuthContext.Consumer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          {
            authRoutes
          }
          <Route path="*" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}


export default App;
