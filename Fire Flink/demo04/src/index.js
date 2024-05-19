import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { stroe } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={stroe}>
  <App />
 </Provider>
  
 
);

