import React from 'react';
import ReactDOM from 'react-dom/client';
import OpenComponent from './openComponent'; 
import './openComponent.css'; 
import Categories from './categories.js';
import Beds from './beds.js';
import Sofas from './sofas.js';
import Tables from './table.js';
import Seaters from './seaters.js';
import Cart from './cart.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenComponent />
    <Categories/>
      <Beds/>
    <Seaters/>
    <Sofas/>
    <Tables/>
    <Cart/>
  </React.StrictMode>
);
