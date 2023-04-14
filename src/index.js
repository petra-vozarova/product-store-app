import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { ProductsProvider } from './context/products.context';
import { PictureProvider } from './context/product-picture.context';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

//BrowserRouter wraps the whole app, so the routes can be used to navigate from component to component
//ProductsProvider and PictureProvider wrapped the app, so the products, 
//current page number and products' pictures can be stored in the context accessible throughout our app

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <PictureProvider>
            <App />
          </PictureProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
