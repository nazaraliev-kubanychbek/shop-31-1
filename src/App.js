import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import CartPage from './pages/CartPage/CartPage';
import Header from './components/Header/Header';
import './style.scss';
import { getCategory } from './redux/reducer';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategory());
  }, [])
  return (
    <BrowserRouter>
      <Header />

      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/category/:category' element={<CategoryPage />} />
          <Route path='/product/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
