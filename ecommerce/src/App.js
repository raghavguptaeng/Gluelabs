import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import ProductDetails from './components/productDetails';
import ProductListing from './components/productListing';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing/>} />
        <Route path='products/productDetails/:id' element={<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
