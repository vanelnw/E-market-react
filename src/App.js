
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignupPage from './pages/SignupPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/sign-up' element={<SignupPage/>} />
          <Route path='/products' element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
