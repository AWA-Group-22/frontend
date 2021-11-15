import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ShoppingCart from './components/ShoppingCart'
import ContactList from './components/ContactList'
import ContactDetailView from './components/ContactDetailView';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactData from './data.json';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const contacts = ContactData.map(contact => {
    return { ...contact, id: uuidv4() }
  })

  return (
    <BrowserRouter>
      <div className="headerBackground">
        <div className="headerContainer">
          <Link to="/"><div className="brandText">Gateway Takeaway</div></Link>
          <Link to="/searchfield"><div>Search__________________</div></Link>
          <Link to="/loginpage"><div>Login</div></Link>
          <Link to="/signup-page"><div>Create account</div></Link>
          <Link to="/orders"><div className="orderText">Orders</div></Link>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shoppingcart" element={ <ShoppingCart /> } />
          <Route path="/contacts" element={ <ContactList contacts={ contacts }/> } >
            <Route path=":contactId" element={ <ContactDetailView contacts={ contacts } /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
