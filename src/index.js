import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Contextdata} from './Contextdata/contextdata'
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <Contextdata>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Contextdata>
);


