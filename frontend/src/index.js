import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from "react-cookie";
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/globalStyles'
import { AuthProvider } from './context/AuthProvider';
//redux
import {Provider} from "react-redux";
import store from './redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <CookiesProvider>
        <GlobalStyles>
         <AuthProvider> 
            <App/>
          </AuthProvider>
        </GlobalStyles>
      </CookiesProvider>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
