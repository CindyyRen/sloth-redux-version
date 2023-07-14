import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { products_url } from './utils/constants';
import { fetchProducts } from './actions';
import './index.css';
import App from './App';
import App0 from './App0';
import { store } from './store';

store.dispatch(fetchProducts(products_url));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
    {/* <App0 /> */}
  </Provider>
);
