import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { products_url } from './utils/constants';
import { fetchProducts } from './actions';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import App0 from './App0';
import { store } from './store';

store.dispatch(fetchProducts(products_url));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <App />
      {/* <App0 /> */}
    </Provider>
  </Auth0Provider>
);
