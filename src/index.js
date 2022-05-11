import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

// components
import App from './App';

// Reducer
import {store} from "./store";
import { Provider } from "react-redux";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <Provider store={store}>
           <App />
        </Provider>
     </BrowserRouter>
  </React.StrictMode>
);
