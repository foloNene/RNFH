import 'antd/dist/antd.css';

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Services from './pages/Services';
import Login from "./pages/Login";
import Gallary from "./pages/Gallary"


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gallary' element={<Gallary/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
