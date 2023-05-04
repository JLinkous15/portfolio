import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Portfolio } from './components/Portfolio';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  </BrowserRouter>
);
