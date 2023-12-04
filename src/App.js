import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path= "/" element={<Home/>}>Home</Route>
        <Route path= "/cart" element={<Cart/>}>Cart</Route>
      </Routes>
    </div>
  );
}

export default App;
