import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './apiComponent/app';

// "import" nom du composant a importer "from" './nom du fichier js ou il se trouve
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
