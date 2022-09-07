import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';
import { getCart, getCartOpenStatus } from './store/selectors';

function App() {
  const cartStatus = useSelector(getCartOpenStatus);
  const cart = useSelector(getCart)
  return (
    <div className="App">
      <Header/>
      <Main/>
      {cartStatus && cart.length && <Modal cartStatus={cartStatus} />}
    </div>
  );
}

export default App;
